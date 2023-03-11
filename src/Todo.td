ceate live 4
add table login manager to live
show create table login manager
CREATE TABLE `loginmanager` (`id` int(11) NOT NULL AUTO_INCREMENT, `loggedin_created_at` timestamp NULL DEFAULT NULL, `loginstatus` varchar(5) DEFAULT NULL, `loggedout_created_at` timestamp NULL DEFAULT NULL, `visitor_session` varchar(100) DEFAULT NULL, `ips` varchar(100) DEFAULT NULL, `email` varchar(100) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4	
create table site visitor
CREATE TABLE `sitevisits` (`id` int(11) NOT NULL AUTO_INCREMENT, `visitor_session` varchar(100) DEFAULT NULL, `created_at` timestamp NULL DEFAULT NULL, `usertype` varchar(20) DEFAULT NULL, `ips` varchar(50) DEFAULT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;