/* regCheck function check if a registration number is for GP, L, EC, MP registration plates.*/
function regCheck(regNum,loc){
    return regNum.endsWith(loc);
      }