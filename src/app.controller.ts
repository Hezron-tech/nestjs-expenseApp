import {Controller, Get,Post,Put,Delete} from "@nestjs/common"


@Controller('report/income')
export class AppController{
  @Get()
  getAllIncomeReports(){
    return []
  }

  @Post()
  createReport(){
    return "created"
  }
  
  @Put(':id')
  getReportById(){
    return "updated"
  }

  @Delete(':id')
  deleteReport(){
    return 'delete'
  }

}