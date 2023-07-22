--  Đưa ra tên của những hãng có cung ứng ít nhất 1 mặt hàng màu đỏ 
select `ncc`.`MSNCC`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
group by `MSNCC`
having count(distinct `Mausac`)>1 and
		count(case when `Mausac` = 'do' then 1 end) >=1;
--  Đưa ra mã số của các hãng có cung ứng ít nhất 1 mặt hàng màu đỏ hoặc 1 mặt hàng màu xanh 

select `ncc`.`MSNCC`
from `cungcap` 
inner join `mathang` on `mathang`.`MSMH`=`cungcap`.`MSMH` 
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
group by `MSNCC`
having COUNT(distinct `Mausac`) > 1 and 
       COUNT(case when `Mausac` = 'do' then 1 end) >= 1 or
		COUNT(case when `Mausac` = 'xanh' then 1 end) >= 1;
       -- Đưa ra mã số của hãng có cung ứng ít nhất 1 mặt hàng màu đỏ và 1 mặt hàng màu xanh
(select `ncc`.`MSNCC`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
group by `MSNCC`
having count(distinct `Mausac`)>1 and
		count(case when `Mausac` = 'do' then 1 end) >=1)
union all
(
select `ncc`.`MSNCC`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
group by `MSNCC`
having count(distinct `Mausac`)>1 and
		count(case when `Mausac` = 'xanh' then 1 end) >=1
);-- Đưa ra mã số của hãng cung ứng tất cả các mặt hàng màu đỏ 
select `ncc`.`MSNCC`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
group by `MSNCC`
having count(distinct `Mausac`)>1 and
		count(case when `Mausac` = 'do' then 1 end) >=3;
        
-- Đưa ra mã số của mặt hàng đắt nhất được cung cấp bởi hãng Dustin 
select max(`Giatien`),`mathang`.`MSMH`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
where `TenNCC`='Dustin';

-- Đưa ra mã số của mặt hàng được cung ứng bởi tất cả các hãng mà giá tiền đều nhỏ hơn 200 
select `mathang`.`MSMH`
from `cungcap`
inner join `mathang` on `mathang`.`MSMH` = `cungcap`.`MSMH`
inner join `ncc` on `ncc`.`MSNCC` = `cungcap`.`MSNCC`
where `giatien` < 200;






















select * from`cungcap` 
INNER JOIN `mathang` ON `mathang`.`MSMH`=`cungcap`.`MSMH` 
INNER JOIN `ncc` ON `ncc`.`MSNCC` = `cungcap`.`MSNCC`;




