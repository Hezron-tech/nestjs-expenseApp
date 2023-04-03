
export enum ReportType{
    INCOME ="income",
    EXPENSE ="expense"
 }

export const data :Data ={
    report:[
        {
            id:"uuid1",
            source:"salary",
            amount:7500,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
        {
            id:"uuid2",
            source:"Yt",
            amount:88500,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE
        },
        {
            id:"uuid3",
            source:"upwork",
            amount:7400,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.EXPENSE
        },
        {
            id:"uuid4",
            source:"coding",
            amount:75000,
            created_at:new Date(),
            updated_at:new Date(),
            type:ReportType.INCOME
        },
    ],
 }

 interface Data{
    report:{
        id:string;
        source:string;
        amount:number;
        created_at:Date;
        updated_at:Date;
        type:ReportType
    }[]
 }

