
　6//sp1it=1　6//?r=⭐　&d=2023/12/7 10:13:08　&💻=0　&b=lpukczlq　&!=🌸
数码教程 篇十二：手把手教你安装TrueNas(基础篇)_NAS存储_什么值得买
https://post.smzdm.com/p/a6d8m6vg/

珍藏12t大姐姐全没了(此处有哭声)，
给大姐姐们一个安全的大房子。

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 10:46:27　&💻=0　&b=lpuljui0　&!=🌸
TrueNAS SCALE 以官方推荐的方式直接使用docker、docker compose - Sagit
https://www.truenasscale.com/2022/03/07/765.html

直接使用docker，会影响系统，
社区
方案---docker in docker

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 10:46:33　&💻=0　&b=lpuljyqb　&!=🌸
TrueNAS安装及使用教程 | 张先生的深夜课堂
https://www.ethanzhang.xyz/2023/05/14/TrueNAS%E5%AE%89%E8%A3%85%E5%8F%8A%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B/

2.1 最小安装环境要求
CPU：双核 Inter 64位或者AMD X86_64
TrueNAS不需要两个内核，
内存：最小8GB，其实对于内存的要求是最重要的，建议调整大一些
启动设备：16GB SSD boot device，
存储：两个独立硬盘

1、Stripe是没有冗余的，可以支持最小1块硬盘，当有n个硬盘时，选择Stripe就会创建n个VDev
2、Mirror是镜像，至少需要两块硬盘，和Raid

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 10:48:55　&💻=0　&b=lpuln0wf　&!=🌸
TrueNAS之ZFS详解，让你搞懂ZFS文件系统！ - Sagit
https://www.truenasscale.com/2021/12/20/353.html

ZFS具有可扩展性，并且包括大量保护措施防止数据损坏，支持高存储容量、高效数据压缩、集成文件系统、卷管理、快照和写时复制、连续完整性检查与自动修复、RAID-Z、原生NFSv4 ACL等功能，并且能被精确配置。

写时复制
存储池
快照
数据完整性验证和自动修复

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 11:36:08　&💻=0　&b=lpunbqih　&!=🌸
openzfs draid是什么-腾讯云开发者社区-腾讯云
https://cloud.tencent.com/developer/article/2034950

加快
draid和raidz重建速度
https://ask.qcloudimg.com/raw/yehe-fbd3d4418/zeurq0z2a3.png

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 11:41:26　&💻=0　&b=lpunijwb　&!=🌸
ZFS存储池介绍：Stripe、Mirror、RAIDZ和高速缓存 - 服务器运维 - IDC财务计费系统 prokvm云服务器管理系统 专注于服务器运营、云服务器、vps环境配置、系统运维、网站运营、服务器安全经验分享 prokvm云管理系统 PVE管理系统 procloud
https://www.boydata.com/post/171.html

Stripe：与RAID0类似，磁盘带条，至少需要一个磁盘；
Mirror：与RAID1类似，磁盘镜像，至少需要两个磁盘；

性能对比
Stripe > Mirror
Stripe > RAIDZ1 > RAIDZ2 > RAIDZ3

数据可靠性
Mirror > Stripe
RAIDZ3 > RAIDZ2 > RAIDZ1 > Stripe

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 15:24:20　&💻=0　&b=lpuvh7c9　&!=🌸
折腾了两个月TrueNas终于理解为啥群晖那么贵 - 电脑讨论(新) - Chiphell - 分享与交流用户体验
https://www.chiphell.com/thread-2439909-1-1.html

likeme
https://www.chiphell.com/data/avatar/000/40/62/53_avatar_middle.jpg
这其实是有钱和没钱的关系。有人用钱换时间，有人用时间换钱。我穷得就剩不多的时间了。
Synology本来就是卖软件的，硬件是赠品。

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 15:40:01　&💻=0　&b=lpuw1d5h　&!=🌸
TrueNAS（原 FreeNAS）存储(NAS)新版本下载地址
https://www.rosnas.com/1798.html

Scale-out （向外扩展）
Converged （融合）
Active-active （活跃）
Linux containers （Linux 容器）
Easy-to-manage （易于管理）

　6//sp1it=1　6//?r=⭐　&d=2023/12/7 15:49:21　&💻=0　&b=lpuwddjv　&!=🌸
黑群晖这一篇就够了
https://www.zhihu.com/tardis/zm/art/582855616?source_id=1005

https://pic3.zhimg.com/v2-5d6f3bd21feca0124ffcf22463ec5a16_b.webp?consumer=ZHI_MENG
