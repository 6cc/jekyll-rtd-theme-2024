
>　　　　　　　　6//?r=⭐　&d=2024/12/11 14:54:31　&b=m4jjc19h
## RunApi介绍--ShowDoc
https://www.showdoc.com.cn/runapi/30291
|

http://runapi.showdoc.cc

>　　　　　　　　6//?r=⭐　&d=2024/12/11 14:56:59　&b=m4jjf7ud
## 开放API
https://www.showdoc.com.cn/page/102098
|
page_content
POST

>　　　　　　　　6//?r=⭐　&d=2024/12/11 14:59:12　&b=m4jji2ql
## ShowDoc 搭建及使用 - 一个非常适合IT团队的 API文档、技术文档工具_技术文档doc搭建-CSDN博客
https://blog.csdn.net/rrttyyui/article/details/119248548
|
日常备份数据：

创建sh文件 sh_backup_showdoc_db.sh 执行后按时间创建备份数据

cp /data/showDocData/Sqlite/showdoc.db.php /data/backupFile/showdoc$(date +%Y%m%d%H%M%S).db.php

配置定时任务contable

如果有需要可直接替换备份数据(名称要改成一致)
/data/showDocData/Sqlite/showdoc.db.php

>　　　　　　　　6//?r=⭐　&d=2024/12/11 14:59:46　&b=m4jjisgq
## Docker方式安装--ShowDoc
https://www.showdoc.com.cn/help/65610
|
docker run -d --name showdoc --user=root  --restart=always --privileged=true -p 4999:80 \
-v /showdoc_data/html:/var/www/html/ star7th/showdoc

>　　　　　　　　6//?r=⭐　&d=2024/12/11 15:05:52　&b=m4jjqn14
## 使用Docker部署一个简洁易用的ShowDoc文档系统 - 小z博客 - SegmentFault 思否
https://segmentfault.com/a/1190000043791161
|

Docker部署后默认使用http://IP:4999进行访问，如果需要使用域名访问，可通过Nginx反向代理来完成。下方是一个nginx反向代理的配置实例：

showdoc/123456
