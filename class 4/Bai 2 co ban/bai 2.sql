drop database if exists `booking`;
create database `booking`;
use `booking`;

	create table `hotel`(
		`hotelId` nvarchar(100) primary key,
		`hotelName` nvarchar(100),
		`hotelAddress` nvarchar(100)
	);

	create table `room`(
		`roomNumber` nvarchar(5) primary key,
		`hotelId` nvarchar(100) default null,
		`roomType` enum('single','twin','triple'),
		`price` int,
		key `hotelId`(`hotelId`),
		constraint `room_fk1` foreign key (`hotelId`) references `hotel`(`hotelId`)
	);

	create table `customer`(
		`customerId` nvarchar(100) primary key,
		`name` nvarchar(100),
		`customerAddress` nvarchar(100)
	);

	create table `checkin`(
		`checkinId` nvarchar(100) ,
		`hotelId` nvarchar(100) default null,
		`customerId` nvarchar(100) default null,
		`roomNumber` nvarchar(100) default null,
		`checkin_at` timestamp NOT NULL DEFAULT current_timestamp(),
		`checkout_at` date,
		primary key (`checkinID`),
		KEY `hotelId` (`hotelId`),
		KEY `customerId` (`customerId`),
		KEY `roomNumber`(`roomNumber`),
		CONSTRAINT `checkin_ibfk_1` FOREIGN KEY (`hotelId`) REFERENCES `hotel` (`hotelId`),
		CONSTRAINT `checkin_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`),
		CONSTRAINT `checkin_ibfk_3` FOREIGN KEY (`roomNumber`) REFERENCES `room` (`roomNumber`)
	);

select * from `hotel`;
select * from `customer`;
select * from `room`;
select * from `checkin`;

-- dua ra danh sach gia va loaiP cua tat ca cac phong cua khach san 'Veum'
select `room`.`price`,`room`.`roomType`
from `room` inner join `hotel` on `hotel`.`hotelId` = `room`.`hotelId`
where `hotelName` = 'Veum';

-- liet ke tat ca cac khach dang o khac san 'Veum'
select `customer`.`name`
from `checkin` 
inner join  `customer` on `customer`.`customerId`=`checkin`.`customerId` 
inner join  `room` on `room`.`roomNumber` = `checkin`.`roomNumber`
inner join `hotel` on `hotel`.`hotelId` = `checkin`.`hotelId`
where `hotelName` = 'Veum';

-- liet ke tat ca cac phong o khach san Veum va ten khach hang dang o cac phong do
select `room`.`roomNumber`,`room`.`roomType`,`room`.`price`,`customer`.`name`
from `checkin` 
inner join  `customer` on `customer`.`customerId`=`checkin`.`customerId` 
inner join  `room` on `room`.`roomNumber` = `checkin`.`roomNumber`
inner join `hotel` on `hotel`.`hotelId` = `checkin`.`hotelId`
where `hotelName`= 'Veum';

-- liet ke cac phong chua co nguoi o tu trc den nay cua khach san Veum
(select `room`.`roomNumber`,`room`.`roomType`
from `checkin` 
left outer join  `customer` on `customer`.`customerId`=`checkin`.`customerId` 
left outer join  `room` on `room`.`roomNumber` = `checkin`.`roomNumber`
left outer join `hotel` on `hotel`.`hotelId` = `checkin`.`hotelId`
where `hotelName` = 'Veum'
)
union all
(select `room`.`roomNumber`,`room`.`roomType`
from `checkin` 
right outer join  `customer` on `customer`.`customerId`=`checkin`.`customerId` 
right outer join  `room` on `room`.`roomNumber` = `checkin`.`roomNumber`
right outer join `hotel` on `hotel`.`hotelId` = `checkin`.`hotelId`
where `hotelName` = 'Veum'
);
-- tong so phong cua cac khach san tai Newyork
select count(`room`.`roomNumber`)
from `room` inner join `hotel` on `hotel`.`hotelId` = `room`.`hotelId`
where `hotelAddress` like concat('%','NY','%');

-- tang don gia cua tat ca cac phong don len them 5%
select `price` from `room`
where `roomType`='single';
update `room`
set `price`=`price`*1.05
where `roomType` = 'single';