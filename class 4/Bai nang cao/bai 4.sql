-- Đưa ra tên của các môn học  
select `tenmh`
from `monhoc`
;
-- Đưa ra MS, Họtên, Ngày sinh của các sinh viên ở Hà nội 
select D.`mssv`,S.`hoten`,S.`ngaysinh`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where S.`quequan` = 'ha tay'
;
-- Đưa ra mã số của các sinh viên đăng ký học môn học có mã số M1 hoặc M2 
select D.`mssv`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where D.`msmh` = 'M1'
or D.`msmh` = 'M2'
;
-- Đưa ra tên của môn học mà sinh viên có mã số 20042325 học 
select M.`tenmh`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where D.`mssv`= 20042325
;
-- Đưa ra tên của các sinh viên đăng ký học ít nhất một môn do giảng viên Lê Quân dạy 
select D.`mssv`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
group by `mssv`
having count( distinct `tengv`)>1 
and count( case when `tengv`='Le Quan' then 1 end)>=1;
;
-- Đưa ra tên các môn mà sinh viên Nguyễn Văn Minh học và điểm tương ứng của các môn đó cho sinh viên này 
select M.`tenmh`,`diem`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where S.`hoten`='Nguyen Van Minh'
;
-- Đưa ra mã số của các sinh viên học tất cả các môn mà giảng viên Lê Quân có dạy 
select S.`mssv`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where M.`tengv` = 'Le Quan'
;
-- Đưa ra tên của các môn học không được sinh viên nào đăng ký học 
select `tenmh`
from `monhoc`
where `tenmh` not in ( select `tenmh` 
		from `dangky` as D
		inner join `sinhvien` as S on S.`mssv`=D.`mssv`
		inner join `monhoc` as M on M.`msmh`=D.`msmh`
);
-- Những sinh viên nào có đăng ký học từ 5 môn trở lên
select  S.`Hoten`
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
group by S.`Hoten`
having  count(`tenmh`) >= 5
;
--  Điểm trung bình của sinh viên Nguyễn Văn Minh là bao nhiêu?  
select avg(`diem`)
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`
where `Hoten`='Nguyen Van Minh';
-- Sinh viên nào đạt điểm cao nhất cho môn CSDL? 
select max(R) as diem, H
from
(
	select `diem` as R, S.`Hoten` as H
	from `dangky` as D
	inner join `sinhvien` as S on S.`mssv`=D.`mssv`
	inner join `monhoc` as M on M.`msmh`=D.`msmh`
	where `tenmh`='CSDL'
) as F
;





-- phan support
select * 
from `dangky` as D
inner join `sinhvien` as S on S.`mssv`=D.`mssv`
inner join `monhoc` as M on M.`msmh`=D.`msmh`