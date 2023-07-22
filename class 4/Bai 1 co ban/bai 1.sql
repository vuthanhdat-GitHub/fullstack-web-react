drop database if exists `property`;
create database `property`;
use `property`;

create table `customer`(
	`customerId` nvarchar(100) primary key,
    `customerName` nvarchar(100),
    `phone` nvarchar(100),
    `department` nvarchar(100)
);

create table `rentedhouse`(
	`houseId` nvarchar(100) primary key,
    `address` nvarchar(100),
    `price` integer,
    `hostName` nvarchar(100)
);

create table `contract`(
	`contractId` nvarchar(100) ,
    `houseId` nvarchar(100) default null,
    `customerId` nvarchar(100) default null,
    `start_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `end_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
      PRIMARY KEY (`contractId`),
  KEY `houseId` (`houseId`),
  KEY `customerId` (`customerId`),
  CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `rentedhouse` (`houseId`),
  CONSTRAINT `contract_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`)

);

select * from `customer`;
select * from `contract`;
select * from `rentedhouse`;

-- dua ra danh sach 'dia chi' 'ten chu nha' cua ngoi nha co gia thue it hon 10tr
select `address`,`hostname`
from `rentedhouse`
where `price` < 10000000;

-- dua ra danh maKH hoten tencoquan cua nhung nguoi thue nha cua chu nha co ten la nong van den
select `customer`.`customerId`,`customer`.`customername`,`customer`.`department`
from `contract` inner join `customer` on `customer`.`customerId`=`contract`.`customerId` inner join `rentedhouse` on `rentedhouse`.`houseId` = `contract`.`houseId`
where `hostName` = 'et';

-- dua ra danh sach ngoi nha chua tung duoc ai thue
select * 
from `rentedhouse` as N 
where `houseId` not in (select `houseId` from `contract`);

-- dua ra gia thue cao nhat cua nhung ngoi nha dc thue it nhat mot lan
select max(`price`) 
from `contract` inner join `customer` on `customer`.`customerId`=`contract`.`customerId` inner join `rentedhouse` on `rentedhouse`.`houseId` = `contract`.`houseId`


