self.addEventListener('push', event => {
  const data = event.data.json()
  console.log('Got Push');
  console.log('New notification', data)
  const options = {
    body: data.body,
   icon: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/cat-icon.png',
   image:'https://unsplash.com/photos/Pmh0UoG1vlE/download?force=true&w=640',
   sound:'https://notificationsounds.com/sound-effects/just-like-magic-506'
  }
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
})
  


 

  
