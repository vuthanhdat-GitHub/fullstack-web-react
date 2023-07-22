-- Creat data --
drop database if exists `blabla`;
create database `blabla`;
use `blabla`;
create table `product`(
    `productID`int primary key auto_increment NOT NULL,
    `display` nvarchar(100),
    `priceIn` int(10),
    `priceOut` int(10),
    `provider` nvarchar(100),
    `category` nvarchar(10),
    `salePercent` int(10),
    `salePrice` int(10),
    `imageproductURL` nvarchar(100)
);
create table `user`(
	`userID` int primary key auto_increment NOT NULL,
    `username` nvarchar(100),
    `pass` nvarchar(100),
    `phonenumber` int(20),
    `email` nvarchar(100),
    `address` nvarchar(100),
    `status` boolean,
    `payment` nvarchar(100),
    `avatarURL` nvarchar(100),
    `dob` date,
    `role` int
);
create table `category`(
	`categoryID` int primary key auto_increment NOT NULL,
    `displayname` nvarchar(100), 
    `size` int(10),
    `color` nvarchar(100),
    `function` nvarchar(100),
    `type` nvarchar(100)    
);
create table `order`(
	`orderID` int primary key auto_increment NOT NULL,
	`userID` nvarchar(10),
    `deliverystatus` nvarchar(100),
    `paymentstatus` nvarchar(100),
    `address` nvarchar(100),
    `phonenumber` int,
    `remind` nvarchar(100),
    `ship` int
);
create table `orderDetail`(
	`orderID` nvarchar(10),
    `productID` nvarchar(10),
    `quantity` int,
    `price` int
);

select * from `user`;

-- thêm bản ghi --
INSERT INTO `category` (displayname, size, color, `function`, `type`)
VAlUES ( 'Dell', '13' , 'grey', 'electronic', 'laptop');

INSERT INTO `user` (username,pass,phonenumber,email,address,`status`,payment,avatarURL,dob,`role`)
VAlUES ( 'hieusofia', '1234' , '0869165701', 'quanghieusieubeo@gmail.com', 'hanoi',true,'techcombank','abcd','2020-07-01','2');

INSERT INTO `product` (display,priceIn,priceOut,provider,category,salePercent,salePrice,imageproductURL)
VAlUES ( 'fender electric guitar', '400' , '696', 'fender', 'guitar','20','556.8','abcd');

-- sửa bản ghi --
--
alter table `Category`
add weight nvarchar(100);
--
alter table `Category`
drop column weight;
-- xóa bản ghi --
Delete from `Category` where categoryID = 1;
-- cập nhật bản ghi --
Update `Category`
Set displayname = 'ASUS' , Color = 'black', size = 17
where categoryID = 2;

