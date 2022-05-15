# CSRF

## 定义（是什么）

跨站请求伪造（Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF，是一种挟制用户在当前已登录的 web 程序上执行非本意操作的攻击方法。跟跨网站 XSS 相比，XSS 利用的是用户对指定网站的信任，CRSF 利用的是网站对用户网页浏览器的信任。

## 人话

黑客利用用户在网站留下的身份 cookie，在黑客的网站中诱导用户发送该网站的请求，在其中传入黑客想要传入的参数，实现利用用户信息来进行自己的操作。

## 示例

早期我们上网经常遇见在网吧登录 QQ 空间，然后访问别的网站，空间自动会发送一些奇怪的讯息。可能是你访问的网站，通过点击的按钮来发出请求，而请求的接口是 QQ 的接口，发送到后端时，使用了登录空间的 cookie。

## 如何防止

### 利用 SameSite 来防止

```javascript

set-cookie: 1P_JAR=2019-10-20-06;
expires=Tue, 19-Nov-2019 06:36:21 GMT;
path=/;
domain=.google.com;
SameSite=none

```

### 验证请求的来源站点

服务端校验请求源，非合法源产生跨域错误。

### CSRF Token

增加有效 Token 验证，在发送请求时携带 Token 进行验证。Token 保存在 cookie 中，坏人拿不到。
