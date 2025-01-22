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

self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNotification('you got the web push', {})
})

//웹 푸시 알림 클릭
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});