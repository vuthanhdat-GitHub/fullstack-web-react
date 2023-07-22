product`(
    `productID` nvarchar(10) primary key,
    `display` nvarchar(100),
    `priceIn` int(10),
    `priceOut` int(10),
    `provider` nvarchar(100),
    `category` nvarchar(10),
    `salePercent` int(10),
    `salePrice` int(10),
    `imageproductURL` nvarchar(100)

user`(
	`userID` nvarchar(10) primary key,
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

`Order`(
	`orderID` nvarchar(10) primary key,
	`userID` nvarchar(10),
    `deliverystatus` nvarchar(100),
    `paymentstatus` nvarchar(100),
    `address` nvarchar(100),
    `phonenumber` int,
    `remind` nvarchar(100),
    `ship` int

`orderDetail`(
	`orderID` nvarchar(10),
    `productID` nvarchar(10),
    `quantity` int,
    `price` int
);