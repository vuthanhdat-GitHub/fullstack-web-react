-- bai1

select * from rentedhouse;

-- cau a
select `houseId`,`address`,`price`
from `rentedhouse`
where `price` < 1000;

-- cau b
select distinct K.`customerId`,K.`customerName`,K.`department`, N.`hostname`
from `customer` as K
inner join `contract` as H on K.`customerId` = H.`customerId`
inner join `rentedhouse` as N on N.`houseId` = H.`houseId`
where N.`hostname` = 'et';

-- cau c
select * 
from `rentedhouse` as N 
where `houseId` not in (select `houseId` from `contract`);

-- cau d
select max(`price`)
from `contract` as H
inner join `customer` as K on H.`customerId` = K.`customerId`
inner join `rentedhouse` as N on N.`houseId` = H.`houseId`

-- Bai 2