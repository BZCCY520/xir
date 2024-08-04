var posts=["2024/08/04/yu/","2024/08/02/xir/","2024/08/01/生日快乐！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };