import { AcademicSemester } from "../academicSemister/semister.interface";
import { userModel } from "./user.model";
const findLastStudentId = async () => {
    const lastStudent = await userModel.findOne(
        {
            role: 'student',
        },
        {
            id: 1,
            _id: 0,
        },
    )
        .sort({
            createdAt: -1,
        })
        .lean();

    //203001   0001
    return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateId= async( payload:AcademicSemester)=>{
   let currentId =  (0).toString();

    const lastStudentId= await findLastStudentId(); //2030 01 0001

    const lastStudentSemesterCode= lastStudentId?.substring(4,6)
    const lastStudentYear= lastStudentId?.substring(0,4)
    const currentSemesterCode=payload.code
    const currentSemesterYear=payload.year
    if(lastStudentId && lastStudentSemesterCode===currentSemesterCode&&lastStudentYear===currentSemesterYear){
        currentId=lastStudentId.substring(6)
    }





    let incrementId=(Number(currentId)+1).toString().padStart(4,"0")
    incrementId = `${payload.year}${payload.code}${incrementId}`;

    return incrementId;
}