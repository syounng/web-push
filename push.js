var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJJowwV1L2hsfFZIwAQgdrgfDc6U3ualMR1Xa-7eGcnjG6Jks95fLGGAe-jjzBn5v275zmZ7eCJFn4QjR2ljL58',
    privateKey: 'OBJkK0Tjn37sm_YLtNYAEEQhd4iJXLWSa5rvCTh9HXY'
}

  //push 발송
  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

  let subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eKhoO4RfBUA:APA91bH6Z_xPlMxTZJyi926u38So5rXmLDTPmBkmBRgtxdWKB_nKV5mmgbhfh2ozkkzh1B7TGTL_PIKN4BN4KxcH-y5TVKRgVXqGS4O8rqj3hYf9J_B8PPpT0F7O8aqTo70xoWuLcShI","expirationTime":null,"keys":{"p256dh":"BLAQapIvnwg424prtYpmTPWYOeJkM9w11ejAcm6smYBMkMtdzhmPvo7RmY45s37IfX1TGu_F-i70wgS_p6gbbQc","auth":"lYDRi-k7KRLjhXYLrBIZnQ"}}
    const payload = JSON.stringify({
        title: 'Hello from the server!',
        body: 'This is a test notification.',
        icon: '/images/example.png',
        data: { url: 'https://github.com/syounng' }
    });
    
    push.sendNotification(subscription,'test message');
    