//웹 푸시 수신
// self.addEventListener('push', event => {
//     const data = event.data.json();
//     self.registration.showNotification('web push!', {
//         body: Text,
//         data: {
//             url: 'https://github.com/syounng'
//         }
//     });
// });

// self.addEventListener('push', () => {
//     self.ServiceWorkerRegistration.sendNotification('you got the web push', {})
// })

self.addEventListener('push', function (e) {
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
            { 
                action: 'Close', 
                title: 'Close', 
                icon: 'images/xmark.png'
            }
        ]
    }
    e.waitUntil(
        self.registration.showNotification('You got the web push!', options)
    )
})

//웹 푸시 알림 클릭
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});