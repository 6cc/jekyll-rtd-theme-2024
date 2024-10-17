
　6//sp1it=1　6//?r=⭐　&d=2024/1/28 17:10:38　&💻=0　&b=lrxa67kh　&!=🌸
OpenWrt 安装 OpenClash 插件并配置节点 - 彧繎博客
https://opclash.com/article/80.html

　6//sp1it=1　6//?r=⭐　&d=2024/2/10 17:16:27　&💻=0　&b=lsfv3rfu　&!=🌸
求助：openwrt的samba可以访问，不过不能写入-OPENWRT专版-恩山无线论坛
https://www.right.com.cn/FORUM/thread-4041214-1-1.html

SSH进去，设置目录权限 777

chmod -R 777 /mnt/sata1-4/smb

>　　　　　　　　6//?r=⭐　&d=2024/10/16 16:23:59　&b=m2blve82
## 【求帮助】openwrt，aria2，发生错误(16) 文件创建或删除已有文件失败-OPENWRT专版-恩山无线论坛
https://www.right.com.cn/forum/thread-4019560-1-1.html
|
也可能是权限问题，登录到设备console界面，看看是不是读写权限不足，如果是，chmod 777 (下载文件夹)，打开读写权限

chmod 777 /mnt/5/7

　6//sp1it=1　6//?r=⭐　&d=2024/1/28 17:32:00　&💻=0　&b=lrxaxo62　&!=🌸
OpenWrt 正确编译安装 OpenClash 的方法 - 彧繎博客
https://opclash.com/article/241.html

cd /etc/openclash/core/ 

wget https://hub.gitmirror.com/https://github.com/vernesong/OpenClash/releases/download/Clash/clash-linux-amd64.tar.gz

tar -zxvf clash-linux-amd64.tar.gz

chmod 777 clash

　6//sp1it=1　6//?r=⭐　&d=2024/1/29 10:47:23　&💻=0　&b=lrybx6u8　&!=🌸
OPENCLASH 内核更新失败解决方法-软路由,x86系统,openwrt(x86),Router OS 等-恩山无线论坛
https://www.right.com.cn/forum/thread-8272767-1-1.html

Dev 内核下载: https://github.com/vernesong/OpenClash/releases/tag/Clash
Tun 内核下载: https://github.com/vernesong/OpenClash/releases/tag/TUN-Premium
Tun 游戏内核: https://github.com/vernesong/OpenClash/releases/tag/TUN

　6//sp1it=1　6//?r=⭐　&d=2024/1/29 11:20:59　&💻=0　&b=lryd4egq　&!=🌸
Clash内核及各客户端版本镜像整理 | clash | clash镜像 | clash for windows | cfw | clash for android
https://www.clash.la/archives/755/

　6//sp1it=1　6//?r=⭐　&d=2024/1/29 14:02:50　&💻=0　&b=lryiwjq6　&!=🌸
简介 | Clash 知识库
https://clash.wiki/premium/introduction.html

其源代码的安全性通过多个可信的开发人员相互审查以保证.

　6//sp1it=1　6//?r=⭐　&d=2024/1/29 15:16:21　&💻=0　&b=lrylj3dt　&!=🌸
终端使用代理加速的正确方式（Clash） | Ln's Blog
https://weilining.github.io/294.html

https://cdn.jsdelivr.net/gh/weilining/img@main/img/valinebg.webp

https://kkgithub.com/williamleecn/tpclash2
https://kkgithub.com/LaoYutang/clash-and-dashboard

　6//sp1it=1　6//?r=⭐　&d=2024/2/7 13:58:30　&💻=0　&b=lsbdpn7s　&!=🌸
配置iStoreOS虚拟机 | 渊澄
https://miaoyang.win/2024/01/06/33%E9%85%8D%E7%BD%AEiStoreOS%E8%99%9A%E6%8B%9F%E6%9C%BA/

vi /etc/config/network
config interface ‘lan’
option ipaddr ‘192.168.1.1’

修改完毕后，按下 Esc，输入 “:wq”(保存并退出)，退出 vi 编辑器。
