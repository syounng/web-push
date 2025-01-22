self.addEventListener('push', function(e){
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            { action: 'close', title: 'Close', icon: 'images/xmark.png'}
        ]
    }
    e.waitUntil(self.registration.showNotification('You got the web push!', options))
})


//웹 푸시 알림 클릭
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
