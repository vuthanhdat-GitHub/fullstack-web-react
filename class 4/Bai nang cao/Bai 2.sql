-- Đưa ra tên và tuổi của các nhân viên làm việc cho cả phòng Tổ chức và Kế hoạch 
select `HoTen`,`Tuoi`
from `lamviec` 
inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
where `Tenphong` = 'Phongtochuc'
or `Tenphong` = 'Phongkehoach';
-- Với mỗi phòng với trên 2 nhân viên, hãy đưa ra mã số phong và số nhân viên làm trong phòng đó 
select `lamviec`.`MSP`,count(`lamviec`.`MSNV`), `Tenphong`
from `lamviec` 
inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
group by `Tenphong`
having count( `Tenphong`) >=1 ;

--  Đưa ra tên của các nhân viên mà lương của họ cao hơn cả ngân quỹ của tất cả các phòng mà nhân viên đó làm việc 
select `Hoten`, `Luong`
from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
where `Luong` >= (select max(`Nganquy`) 
	from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`);
    
-- Đưa ra mã số trưởng phòng của những người trưởng phòng mà các phòng họ quản lý đều có ngân quỹ > 1,000,000 
select `phong`.`MSTP`,`Nganquy`
from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
where `Nganquy` > 1000000
group by `MSTP`;

-- Đưa ra tên của người trưởng phòng mà phòng đó có ngân quỹ lớn nhất

select `Hoten`,`lamviec`.`MSNV`
from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
where `lamviec`.`MSNV`=`MSTP`
and exists (select max(`Nganquy`) 
	from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`)
group by `Hoten`    ;

-- Nếu một người có thể quản lý nhiều phòng, người đó có quyền kiểm soát ngân quỹ của tất cả các phògn đó. Hãy đưa ra mã số của người trưởng phòng mà tổng số ngân quỹ được kiểm soát bởi người đó > 5,000,000 
select `Hoten`,`lamviec`.`MSNV`,`lamviec`.`MSP`, sum(`Nganquy`)
from `lamviec` 
	inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
	inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`
where exists (
	select *
    from `phong`
    where `nhanvien`.`MSNV`= `phong`.`MSTP`
) 
and `Nganquy`  > 5000000; 




select * from `lamviec` 
inner join `nhanvien` on `nhanvien`.`MSNV`=`lamviec`.`MSNV` 
inner join `phong` on `phong`.`MSP` = `lamviec`.`MSP`;

