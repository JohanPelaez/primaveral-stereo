<?php
/**
 * Primaveral Stereo 104.4 FM - Daily Connection Logger per IP
 * Endpoint: /api/track.php
 */

// Allow Cross-Origin Requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'u591545004_primaveral');
define('DB_USER', 'u591545004_primaveral');
define('DB_PASSWORD', 'I1j^#wWyEm');

/**
 * Get real client IP address considering proxies & Cloudflare
 */
function getClientIP() {
    $ipKeys = [
        'HTTP_CF_CONNECTING_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_CLIENT_IP',
        'REMOTE_ADDR'
    ];

    foreach ($ipKeys as $key) {
        if (!empty($_SERVER[$key])) {
            $ips = explode(',', $_SERVER[$key]);
            foreach ($ips as $ip) {
                $ip = trim($ip);
                if (filter_var($ip, FILTER_VALIDATE_IP)) {
                    return $ip;
                }
            }
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
}

try {
    // Establish PDO Database Connection
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);

    // Create table if it doesn't exist automatically
    $createTableQuery = "
        CREATE TABLE IF NOT EXISTS visitor_connections (
            id BIGINT AUTO_INCREMENT PRIMARY KEY,
            ip_address VARCHAR(45) NOT NULL,
            connection_date DATE NOT NULL,
            connection_count INT NOT NULL DEFAULT 1,
            user_agent VARCHAR(255) NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY unique_ip_per_day (ip_address, connection_date)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";
    $pdo->exec($createTableQuery);

    // Extract connection details
    $clientIP = getClientIP();
    $today = date('Y-m-d');
    $userAgent = isset($_SERVER['HTTP_USER_AGENT']) ? substr($_SERVER['HTTP_USER_AGENT'], 0, 255) : null;

    // Insert new connection or increment count if IP already connected today
    $sql = "
        INSERT INTO visitor_connections (ip_address, connection_date, connection_count, user_agent)
        VALUES (:ip, :date, 1, :agent)
        ON DUPLICATE KEY UPDATE 
            connection_count = connection_count + 1,
            user_agent = VALUES(user_agent);
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':ip' => $clientIP,
        ':date' => $today,
        ':agent' => $userAgent
    ]);

    // Fetch stats for response
    $statsStmt = $pdo->prepare("SELECT connection_count FROM visitor_connections WHERE ip_address = :ip AND connection_date = :date");
    $statsStmt->execute([':ip' => $clientIP, ':date' => $today]);
    $currentRecord = $statsStmt->fetch();

    $totalUniqueTodayStmt = $pdo->query("SELECT COUNT(DISTINCT ip_address) as unique_today FROM visitor_connections WHERE connection_date = CURRENT_DATE()");
    $uniqueToday = $totalUniqueTodayStmt->fetch()['unique_today'] ?? 1;

    echo json_encode([
        'status' => 'success',
        'message' => 'Conexión registrada exitosamente',
        'data' => [
            'ip' => $clientIP,
            'date' => $today,
            'ip_connections_today' => (int) ($currentRecord['connection_count'] ?? 1),
            'unique_listeners_today' => (int) $uniqueToday
        ]
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Error de conexión con la base de datos: ' . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
