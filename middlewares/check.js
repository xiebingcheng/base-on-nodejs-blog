module.exports = {
    //当前用户不存在的情况下,跳转到登录页.
  checkLogin: function checkLogin(req, res, next) {  
    if (!req.session.user) {
      req.flash('error', '未登录'); 
      return res.redirect('/signin');
    }
    next();
  },

    //用户信息存在,认为用户已经等了,则跳转到之前的页面,同时显示已登录的通知.
  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};