import request from '@/utils/request'

export default {
    //讲师分页查询的方法
    getTeacherList(page, limit) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
            method: 'get'
        })
    },
    //讲师详情的方法
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
            method: 'get'
        })
    }

}