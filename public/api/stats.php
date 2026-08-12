<?php
/**
 * Primaveral Stereo 104.4 FM - Connection Statistics Endpoint
 * Endpoint: /api/stats.php
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

define('DB_HOST', 'localhost');
define('DB_NAME', 'u591545004_primaveral');
define('DB_USER', 'u591545004_primaveral');
define('DB_PASSWORD', 'I1j^#wWyEm');

try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // Unique listeners today & total daily-unique visits across history
    $todayStmt = $pdo->query("SELECT COUNT(DISTINCT ip_address) as unique_today, SUM(connection_count) as total_hits_today FROM visitor_connections WHERE connection_date = CURRENT_DATE()");
    $todayData = $todayStmt->fetch();

    // Total accumulated visits: Sum of daily unique visits (Each IP counts 1 per day)
    $allTimeStmt = $pdo->query("SELECT COUNT(*) as total_daily_unique_visits FROM visitor_connections");
    $allTimeData = $allTimeStmt->fetch();

    // Summary per day (last 30 days)
    $historyStmt = $pdo->query("
        SELECT 
            connection_date, 
            COUNT(DISTINCT ip_address) as unique_ips, 
            SUM(connection_count) as total_connections
        FROM visitor_connections
        GROUP BY connection_date
        ORDER BY connection_date DESC
        LIMIT 30
    ");
    $history = $historyStmt->fetchAll();

    echo json_encode([
        'status' => 'success',
        'summary' => [
            'today_date' => date('Y-m-d'),
            'unique_listeners_today' => (int) ($todayData['unique_today'] ?? 0),
            'total_hits_today' => (int) ($todayData['total_hits_today'] ?? 0),
            'total_visits_all_time' => (int) ($allTimeData['total_daily_unique_visits'] ?? 0)
        ],
        'history_last_30_days' => $history
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'Error de base de datos: ' . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
