self.addEventListener('push', function (e) {
    let data = {};

    // 서버에서 보낸 데이터 파싱 시도
    try {
        data = e.data.json(); // 푸시 데이터가 JSON 형식이라면 파싱
    } catch (err) {
        console.error('Push data parsing error:', err);
        // 파싱 실패 시 기본값 설정
        data = {
            title: 'Default Title',
            body: 'Default message',
            icon: '/images/default-icon.png',
            data: { url: 'https://example.com' }
        };
    }

    // 알림 옵션 동적 생성
    const options = {
        body: data.body || 'Default message', // <-- JSON 데이터에서 body 사용
        icon: data.icon || '/images/default-icon.png',
        vibrate: [100, 50, 100],
        data: data.data,
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: '/images/checkmark.png'
            },
            { 
                action: 'close', 
                title: 'Close', 
                icon: '/images/xmark.png'
            }
        ]
    };

    // 알림 표시
    e.waitUntil(
        self.registration.showNotification(data.title || 'Default Title', options)
    );
});



//웹 푸시 알림 클릭
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
