-- Creat data --
drop database if exists `blabla`;
create database `blabla`;
use `blabla`;
create table `product`(
    productID nvarchar(10) primary key,
    display nvarchar(100),
    priceIn int(10),
    priceOut int(10),
    provider nvarchar(100),
    category nvarchar(10),
    salePercent int(10),
    salePrice int(10),
    imageproductURL nvarchar(100)
);
create table `user`(
	userID nvarchar(10) primary key,
    username nvarchar(100),
    pass nvarchar(100),
    phonenumber int(20),
    email nvarchar(100),
    address nvarchar(100),
    statuss boolean,
    payment nvarchar(100),
    avatarURL nvarchar(100),
    DOB date,
    role int
);
create table `Category`(
	categoryID int primary key auto_increment NOT NULL,
    displayname nvarchar(100), 
    Size int(10),
    Color nvarchar(100),
    Functionn nvarchar(100),
    Typee nvarchar(100)    
);
create table `Order`(
	orderID nvarchar(10) primary key,
	userID nvarchar(10),
    deliverystatus nvarchar(100),
    paymentstatus nvarchar(100),
    address nvarchar(100),
    phonenumber int,
    remind nvarchar(100),
    ship int
);
create table `orderDetail`(
	orderID nvarchar(10),
    productID nvarchar(10),
    quantity int,
    price int
);

select * from `Category`;

-- thêm bản ghi --
INSERT INTO `Category` (displayname, size, color, functionn, typee)
VAlUES ( 'Dell', '13' , 'grey', 'electronic', 'laptop');

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

