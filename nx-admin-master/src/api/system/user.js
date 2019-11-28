import request from '@/utils/request'

// 分页查询user列表
export function getUserListPage(sysUserQueryParam) {
  return request({
    url: '/sysUser/getPageList',
    method: 'post',
    data: {
      sysUserQueryParam
    }
  })
}
