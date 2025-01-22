var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJJowwV1L2hsfFZIwAQgdrgfDc6U3ualMR1Xa-7eGcnjG6Jks95fLGGAe-jjzBn5v275zmZ7eCJFn4QjR2ljL58',
    privateKey: 'OBJkK0Tjn37sm_YLtNYAEEQhd4iJXLWSa5rvCTh9HXY'
}

  //push 발송
  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

  let subscription = {};

  push.sendNotification(subscription, 'test message')