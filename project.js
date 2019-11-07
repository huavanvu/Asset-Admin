/**
 * @api {get} /project/list Get List Project
 * @apiVersion 0.1.0
 * @apiName GetListProject
 * @apiGroup Project
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page.
 * @apiParam {Object} filter Filter Project By.
 * @apiParam {Object} sort Sort Project By.
 * @apiParamExample Example:
 *     {
 *       "page": 2,
 *       "limit": 10,
 *       "filter": {"keyword":"my phu apartment"},
 *       "sort": {"a_price_value":-1}
 *     }
 * 
 * @apiSuccess {Object} list List of Project.
 * @apiSuccessExample Success-Response-Data:
*   [
*     {
*         "_id": "5d888d1d73f4fc01e64aa83f",
*         "create_uid": "5d679819325ab70ab0157ce5",
*         "create_date": "2019-08-25T15:13:30.954Z",
*         "write_uid": "5d679819325ab70ab0157ce5",
*         "write_date": "2019-08-25T15:13:30.954Z",
*         "company_id": "ROOT",
*         "status": 0,
*         "delete_id": "",
*         "parent_id": "",
*         "status_id": "5d844eed73f4fc01e646f773",
*         "priority_id": "",
*         "start_date": null,
*         "end_date": null,
*         "description": "",
*         "percentage": 0,
*         "name": "KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN",
*         "code": "7108-P.05.6",
*         "keyworks": "",
*         "category_id": "5d8345fca2178d987366ff40",
*         "points": {
*             "type": "Point",
*             "coordinates": [
*                 106.739236657367,
*                 10.6853174908685
*             ]
*         },
*         "polygons": {
*             "type": "Polygon",
*             "coordinates": [
*                 [
*                     [
*                         106.7413520063106,
*                         10.68443250106499
*                     ],
*                     [
*                         106.7405810629087,
*                         10.68733661380209
*                     ],
*                     [
*                         106.7370692192793,
*                         10.68620253259754
*                     ],
*                     [
*                         106.7380086481574,
*                         10.68330596014453
*                     ],
*                     [
*                         106.7413520063106,
*                         10.68443250106499
*                     ]
*                 ]
*             ]
*         },
*         "currency_id": "",
*         "unit_price": 0,
*         "currency_unit_id": "",
*         "handover_before": 0,
*         "handover_after": 0,
*         "tags": "",
*         "location": "7108-P.05.6 - Xã Phú Xuân - huyện Nhà Bè - Tp. HCM.",
*         "investor_id": "COTEC LAND & COTEC GROUP",
*         "project_status": " Chưa thi công ",
*         "legal": "Không có thông tin",
*         "land_type": "ODT",
*         "land_area": " 9,171.0 ",
*         "land_unit_id": " m2 ",
*         "block": 2,
*         "floor": 25,
*         "floor_unit_id": " tầng ",
*         "ch": 592,
*         "ch_unit_id": " CH ",
*         "sh": 23,
*         "sh_unit_id": " SH ",
*         "oft": 144,
*         "oft_unit_id": " OFT ",
*         "tmdv": 5,
*         "tmdv_unit_id": " m2 TMDV ",
*         "a_value": 51.5,
*         "a_value_unit_id": " triệu/m2 ",
*         "a_rent": 15.5,
*         "a_rent_unit_id": " triệu / tháng căn 1PN ",
*         "access_road": " Đường vào: 35m (LG: 40m) ",
*         "characteristics": "KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN là DỰ ÁN CHUNG CƯ tọa lạc tại 7108-P.05.6 - Xã Phú Xuân - huyện Nhà Bè - Tp. HCM. được phát triển bởi COTEC LAND & COTEC GROUP, có diện tích 9171m2",
*         "legal_group": "1                                   ",
*         "sale_status": "",
*         "sale_unit_price": 0,
*         "sale_price_unit_id": "",
*         "deposit": 0,
*         "deposit_unit_id": "",
*         "payment": 0,
*         "payment_unit_id": "",
*         "handover_condition": "Bàn giao nội thất cơ bản",
*         "design_type": "Hướng ngoại",
*         "design_style": "Cổ điển",
*         "design_standard": "LOTUS",
*         "contractor": "Fcons",
*         "designer": "TTID",
*         "manager": "CBRE",
*         "management_fee": 17,
*         "management_fee_unit_id": " / m2 sàn",
*         "main_project": 1,
*         "block_unit_id": " block ",
*         "address": "",
*         "handover_date": "Nov-22",
*         "a_value_rate": 1,
*         "photo": "",
*         "a_price_value": 51.5,
*         "reaction": [],
*         "keyword": "KHU CĂN HỘ BLUE SAPPHIRE PHÚ XUÂN khu can ho blue sapphire phu xuan",
*         "status_detail": {
*             "_id": "5d844eed73f4fc01e646f773",
*             "create_uid": "1",
*             "create_date": "2017-10-10T07:44:31.169Z",
*             "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
*             "write_date": "2019-07-27T06:40:53.360Z",
*             "company_id": "ROOT",
*             "status": true,
*             "delete_id": "",
*             "status_name": "Chưa thi công",
*             "order_by": 3,
*             "percentage": 1,
*             "parent_id": "5d6fa6a1d6bfa6bf87bea141",
*             "marker_url": "Marker_chualam.svg",
*             "marker_hover_url": "marker_bds_ban_hover.svg"
*         },
*         "category": {
*             "_id": "5d8345fca2178d987366ff40",
*             "create_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
*             "create_date": "2019-07-10T13:01:26.263Z",
*             "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
*             "write_date": "2019-09-03T02:08:44.647Z",
*             "company_id": "ROOT",
*             "status": 0,
*             "delete_id": "d5ea172e-dc05-4539-b77d-a70a5cda3ed3",
*             "category_name": "DỰ ÁN CHUNG CƯ",
*             "parent_id": "",
*             "category_code": "APROJ",
*             "sequence": 1,
*             "keyworks": "",
*             "description": ""
*         }
*     }
*   ]
*/

/**
 * @api {get} /project/count Count Project
 * @apiVersion 0.1.0
 * @apiName CountProject
 * @apiGroup Project
 * @apiParam {Object} filter Filter Project By.
 * @apiParamExample Example:
 *     {
 *       "filter": {"keyword":"apartment"}
 *     }
 * @apiSuccess {Int32} number Number of Project.
 * @apiSuccessExample Success-Response-Data:
 *     {
 *       25
 *     }
 */

 

 

 
 