 /**
 * @api {post} /category/add Add Post
 * @apiVersion 0.1.0
 * @apiName AddPost
 * @apiGroup Post
 * @apiParam {Boolean} status Post Status.
 * @apiParam {ObjectId} delete_id Post Delete ID.
 * @apiParam {String} name Post Name.
 * @apiParam {ObjectId} category_id Post Category ID.
 * @apiParam {String} url_name Post URL Name.
 * @apiParam {Number} sequence Post Sequence.
 * @apiParam {String} photo Post Photo.
 * @apiParam {String} description Post Description.
 * @apiParam {Number} receipt_no Post Receipt Number.
 * @apiParam {Date} receipt_date Post Receipt Date.
 * @apiParam {String} keyword Post Keyword.
 * @apiParam {String} content Post Content.
 * @apiParam {Number} flash Post Flash.
 * @apiParam {String} image_url Post Image URL.
 * @apiParam {Object} reaction Post Reaction.
 * @apiParam {Object} comment Post Comment.
 * @apiParam {Boolean} publish Post Publish.
 * @apiParam {Date} publish_date Post Publish Date.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "status": true,
 *       "delete_id": null,
 *       "description": "Ở Sài Gòn một lô đất cho xây dựng diện tích khoảng 30-50m2. Những diện tích này chỉ có ở Khu dân cư hiện hữu chỉnh trang chứ không ở Khu dân cư xây dựng mới.",
 *       "reaction": [
 *           "5d8455ae9d64a30ca46266df",
 *           "5d9187e111860542e4ac449a",
 *           "5d91a218eb108b2fb47183cf"
 *       ],
 *       "comment": [],
 *       "publish_date": "2019-09-11T01:38:42.912Z",
 *       "publish": true,
 *       "name": "Đánh Giá Về Tình Hình Xây Dựng Dân Cư Tại TP.HCM",
 *       "url_name": "danh-gia-ve-tinh-hinh-xay-dung-dan-cu-tai-tp-hcm",
 *       "sequence": 14,
 *       "category_id": [
 *           "5d809e35dc23f01c7c85a09d"
 *       ],
 *       "keyword": "khu dân cư hiện hữu chỉnh trang, khu dân cư xây dựng mới, dân cư tại sài gòn",
 *       "content": "<p>Theo kinh nghiệm, ở Sài Gòn một lô đất cho phép xây dựng tự do có diện tích khoảng 30-50m2 là tốt nhất. Lý do có thể được phân tích như sau:</p><p>Theo quy chuẩn thiết kế của Việt Nam, 01 người để thoải mái tương đối thì cần một khoảng không gian sống tương ứng 25m2, đó là tiêu chuẩn của nhà ở thương mại.</p><p>Tiêu chuẩn cho các đối tượng thu nhập thấp hơn giảm xuống 12m2/người, còn nhà trọ sinh viên thì trong thực tế khoảng 4 - 8m2/người.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/33dfe6a6-7b88-4328-b021-f6cf7da1e5d2.jpg\"></p><p>Một mẫu nhà 50m2 phổ biến tại sài gòn</p><p><br></p><p><br></p><p><br></p><p>Nếu lấy chuẩn từ 12-25m2/người,thì một gia đình trung bình có 04 người, cần một diện tích sàn khoảng 48-100m2.Với diện tích đất khoảng 30-50m2, xây trung bình khoảng 2 tầng, là đủ diện tíchsống cho một gia đình 04 người.</p><p>Ngoài ra, với diện tích từ30-50m2, thì tổng giá trị đất, giá trị xây dựng nhà cũng không quá cao, phù hợpvới thu nhập trung bình của nhiều gia đình ở Thành phố. Đó là lý do loại diệntích này là tương đối tốt và phù hợp.</p><p>Tuy nhiên, những diện tích này chỉ xuất hiện ở Khu dân cư hiện hữu chỉnh trang chứ không xuất hiện ở Khu dân cư xây dựng mới.</p><h2><strong>Lược lại một chút về lịch sử</strong></h2><p>Lược lại lịch sử một chút, như chúng ta cũng biết, Sài Gòn được quy hoạch khá bài bản ở khu Q1, Q3, bởi người Pháp. Ở đây, đường chạy theo ô bàn cờ. Và theo lịch sử, thời gian đó được quy hoạch chỉn chu với các khu ở, khu hành chính khu trường học, bệnh viện, công trình công cộng … đầy đủ.</p><p>Nhưng đến sau đó, dân số tăng nhanh, thành phố mở rộng chủ yếu về hướng Bắc và Tây Thành phố, là những nơi có khu đất cao, và vì bối cảnh lịch sử, chiến tranh, di dân…, việc phát triển này đa số tự phát.</p><p>Dân đông lên nhưng đất không “nở” ra được, do đó phải phân lô, tách thửa cũng tự phát, rồi trổ hẻm…, trổ đường ngang dọc, kể cả xéo.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/d863cd78-e14d-4b57-93a6-c96f992cc52c.jpg\"></p><p><br></p><p><br></p><p>Nhà xây tự do, trồi sụt, đường không có vỉa hè, cây xanh, đa số chỉ toàn đất và nhà nhiều kiểu nhiều loại, tự do hết mức.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/70414ce0-0697-41b5-a5aa-d47fcf49cfaf.jpg\"></p><p>Những khu nhà tạm kiểu này đã tồn tại ở Sài Gòn từ rất lâu rồi</p><p><br></p><p><br></p><p><br></p><p>Cũng vì nhu cầu ở và sự quản lýkhông chặt chẽ việc phân lô tách thửa không chỉ diễn ra ở các quận Bắc, Tây, màđến các quận trung tâm như Q3, các thửa đất Biệt thự được phân lô đẹp đẽ cũng bịtách ra thành các thửa nhỏ, trổ hẻm. Thậm chí các khu đất công cộng thì cũng bịchiếm mặt tiền…</p><p>Vì vùng đất phía Tây và Băc là đất cao, nên dễ tự phát, và dễ tách thửa, do đó khu vực các quận hướng này ở đặc người.</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/9bb8972d-30e9-43e4-9c85-243fe753819c.jpg\"></p><p><br></p><p>Một góc khu đô thị Phú Mỹ Hưng</p><p><br></p><p><br></p><p><br></p><p>Các quận ở phía Nam, Đông, do đặc điểm địa hình thấp, ao hồ nhiều, nên dân cư chỉ tập trung ở xung quanh các kênh hay các tuyến đường chính.</p><p>Đến khoảng năm 1992, bắt đầu xuất hiện các Công ty Bất động sản, lúc này mới bắt đầu phát triển ra khu Đông, Nam, là những vùng đất trũng, ít người. Phú Mỹ Hưng là đơn vị tiên phong.</p><p>Để minh chứng, sự phát triển dân số qua thời gian của các khu vực trong thành phố có thể được tóm gọn cụ thể trong Infographic sau: (Số liệu dựa trên niên giám thống kê của cục thống kê TP.HCM)</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/21342f5e-5dcd-45f3-9194-b2bf78d80421.jpg\"></p><p>*Chú thích: Không có số liệu thống kê cho Tân Phú và Bình Tân của năm 1999</p><p><br></p><p><br></p><p>Sài Gòn hiện nay chia thành 02 nửa. Nửa Tây, Bắc thì đa số là dân cư tự phát, tạo thành các khu Dân cư hiện hữu chỉnh trang. Nửa Đông, Nam thì đa số là đất Dự án, là Khu dân cư xây dựng mới, xen kẽ đó là các khu dân cư hiện hữu ở dọc trục các đường lớn.</p><h2><strong>Khu dân cư hiện hữu chỉnh trang</strong></h2><p>Đến đây cũng đã phần nào hiểu được Khu dân cư hiện hữu chỉnh trang là gì, với loại quy hoạch này, thường được áp dụng theo kiểu tự phát nhưng được quản lý, nghĩa là vẫn cho theo các đặc điểm của khu tự phát như phân lô, tách thửa, trổ hẻm, được xây tự do, có sổ đỏ, phân thửa nhỏ…, nhưng được quản lý về mặt quy hoạch chứ không bỏ như trước.</p><h2><strong>Khu dân cư xây dựng mới</strong></h2><p>Với loại này thì đa số là kiểu đấtDự án, làm lại từ đầu. Với loại quy hoạch này thì quy chuẩn áp dụng mới hoàntoàn và bị siết chặt hơn nhiều so với Khu dân cư hiện hữu chỉnh trang. Với loạiquy hoạch này, ở Sài Gòn thì không được cấp sổ đỏ, phải xây nhà theo mẫu, khôngđược trổ hẻm…, việc quy hoạch này tạo ra các khu dân cư, khu đô thị mới, quycũ, và đẹp.</p><h2><strong>Một số nghịch lý</strong></h2><p>Chúng ta vẫn luôn thích một miếng đất có sổ đỏ và xây dựng tự do, nhưng cũng lại muốn một khu đô thị đẹp đẽ, đồng đều.</p><p>Đây là một mong muốn hơi mâu thuẫn, vì đã tự do thì sẽ không thể đồng đều với phong cách mong muốn khác biệt của người Việt.</p><p>Vì thế, chắc chắn muốn xây dựng tự do thì không đồng đều, mà muốn đồng đều thì chắc chắn không thể xây dựng tự do.</p><p>Với các khu dân cư hiện hữu, diện tích một lô đất nằm ở khoảng 30-50m2, và xây tự do với mật độ 100%, do đó số lượng dân cư đông.</p><p>Khi dân đông thì bù lại có nhiều tiện ích, càng nhiều tiện ích thì dân cư lại tập trung càng đông.</p><p><br></p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/3c719f0a-1f29-4bfc-adcb-4f12dce4232b.jpg\"></p><p>Những khu vực như quận 1 hay quận 7 luôn có những tiện ích vượt trội</p><p><br></p><p><br></p><p><br></p><p>Với các khu dân cư xây dựng mới, thì diện tích tổi thiểu thường là 100m2, và việc xây dựng phải lùi trước, lùi sau, xây nhà theo mẫu, do đó tuy đẹp nhưng dân cư lại thưa thớt.</p><p>Theo quy hoạch cũng có nhiều khu đất để làm tiện ích, nhưng vì dân cư không có nên không xây tiện ích được mà chỉ là các khu đất trống.</p><p>Khi mà tiện ích không có thì bù lại dân cư không về, dân cư không về thì không việc gì xây tiện ích, và vòng luẩn quẩn như thế tạo nên nhiều khu quy hoạch cũng đẹp mà không có người ở.</p><h2><strong>Và một vài điều thú vị xảy ra</strong></h2><p>Nhìn vào bản đồ vệ tinh Sài Gòn, chúng ta có thể thấy rõ về sự phân bố dân cư nghiêng hẳn về Tây, Bắc, nhưng nếu quan sát bản đồ Dự án thì ngược lại, số lượng Dự án nghiêng hẳn về hướng Đông và Nam.</p><p>Xét về hệ số sử dụng đất, hay mật độ dân cư, mật độ giao thông, chắc chắn khu Đông – Nam sẽ có mật độ dân cư thấp hơn và mật độ giao thông cao hơn Khu Tây, Bắc.</p><p>Theo đó, khu Đông, Nam là khu dân cư mới, khu Tây, Bắc là khu dân cư hiện hữu (cũ), thế nên về ở, về môi trường sống, và về cả độ “giàu” thì dân cư hướng Tây, Bắc hơn Đông, Nam.</p><p>Về hiện hữu thì Khu Bắc, Tây chiếm ưu thế, nhưng về Dự án thì Khu Đông, Nam lại chiếm ưu thế.</p><p>Các công trình chung cư, các khu đô thị mới ở hướng Đông, Nam khác khá nhiều ở hướng Tây, Bắc.</p><p>Tuy nhiên, dân hướng Tây, Bắc lại nắm giữ văn hóa, hay “túi khôn” của cả Thành phố, bằng chứng là các trường học nổi tiếng, các hội đoàn… đều nằm ở hướng Bắc, Tây. Thậm chí những thứ hay ho, tinh tế cũng nằm hướng Tây, Bắc.</p><p>Ngược lại, khu Đông, Nam lại dành nhiều cho người trẻ, những người chịu đi và ít tiền, thích một cuộc sống hiện đại.</p><p>Các sinh hoạt mang tính văn hóa, các quán café đặc biệt, quán ăn ngon, hội đoàn lớn… thường không nằm ở hướng Đông, Nam.</p><p>Đôi khi đi một vòng, sẽ thấy được những thứ mà mình chưa hề nghĩ nó tồn tại, thật đó.</p>",
 *       "flash": 0,
 *       "image_url": "images/Post/33dfe6a6-7b88-4328-b021-f6cf7da1e5d2.jpg",
 *       "category": [
 *           {
 *               "_id": "5d809e35dc23f01c7c85a09d",
 *               "name": "Doanh nghiệp"
 *           }
 *       ]
 *    } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {get} /post/list List Post
 * @apiVersion 0.1.0
 * @apiName ListPost
 * @apiGroup Post
 * @apiParam {Number} page Post Page.
 * @apiParam {Number} limit Post Limit.
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 10
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     {
 *       "_id": "5d787a7de6122e0490bd78c9",
 *       "create_uid": {
 *           "_id": "5d679819325ab70ab0157ce5",
 *           "first_name": "admin",
 *           "last_name": "admin"
 *       },
 *       "create_date": "2019-09-11T01:38:42.912Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-09-25T03:29:17.026Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "delete_id": null,
 *       "description": "Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi....",
 *       "reaction": [
 *           "5d82ebca1103a80fbc112019",
 *           "5d9186129b827e3e2cba87c9",
 *           "5d91867c9b827e3e2cba87ce",
 *           "5d917938f81d183444402b33",
 *           "5d9187d011860542e4ac4499",
 *           "5d9188d7ec45fd0c54cd1c75",
 *           "5d91d35c0f1b9c3ac8bc41e2",
 *           "5d918b2c0ce1872d5cc5c70b"
 *       ],
 *       "comment": [],
 *       "publish_date": "2019-09-23T01:46:19.622Z",
 *       "publish": true,
 *       "name": "Chuyện thật: Căn nhà đầu tiên của 1 người tôi quen",
 *       "url_name": "chuyen-that-can-nha-dau-tien-cua-1-nguoi-toi-quen",
 *       "sequence": 12,
 *       "category_id": [
 *           "5d809fe2dc23f01c7c85a0b1"
 *       ],
 *       "keyword": "",
 *       "content": "<p>Anh M là dân 9x, tốt nghiệp Đại học xong thì đi làm cho sàn Môi giới Bất động sản, đó là một trong những việc dễ kiếm nhất, bù lại thì lương cơ bản không cao.</p><p>Nghề sale Bất động sản lên voi xuống chó, trồi sụt tùy vào tình hình thị trường và đôi khi là cái “duyên”, sau thời gian đầu trầy trật thì khoảng một năm sau, mỗi tháng cũng có ít giao dịch nên thu nhập cũng được kha khá.</p><p>Cùng thời gian đó, có một người đồng nghiệp có chồng cùng mấy người bạn mở một quán café nhạc DJ, cũng làm ăn kha khá, vốn đầu tư ban đầu tầm 700tr mà doanh thu mỗi tháng khoảng 350tr (khoảng 12tr/ngày).</p><p>Anh M vì là người có học hành đàng hoàng, nên ngày đi làm sale, tối đi trực quán DJ, thậm chí được nhờ làm báo cáo các khoản thu chi, để nhằm chia lãi cho các cổ đông quán.</p><p>Đó là lý do anh M biết được chính xác doanh thu hàng tháng của quán. Sáng đi làm sale, tối đi làm sếp quán nhiều em chân dài. Oai phong lẫm liệt.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/e2de2bec-1744-487c-abd6-28d077bdb2e2.jpg\"></p><p><br></p><p>Quán hoạt động được tầm 10 tháng, ăn nên làm ra, anh M cũng ăn nên làm ra trong việc sale, lúc này chị đồng nghiệp mới “rỉ tai” là mấy cổ đông quán có chuyện “cơm không lành, canh không ngọt” nên có ý định tách.</p><p>Do đó ghế cổ đông tự nhiên trống, và vì tình cảm chị em nên dành cho anh M 20% với giá 200tr.</p><p>Anh M nhẩm tính thì thấy quá hời, thế nên mới “chơi lớn”, dốc hết hầu bao được 70tr (sale trúng mới dư được nhiêu), cũng thời gian đó, mấy ngân hàng không biết “đánh hơi” kiểu gì mà có thu nhập cao cao xí là gọi dụ vay tín chấp liên tục.</p><p>Kiểu như thời cơ đến, anh M làm hồ sơ vay, dụ lun cậu bạn thời sinh viên góp cho đủ 200tr, dù rằng cái ngân hàng cho vay tín chấp nó “quất” lãi suất tới 3.6%/tháng. Nhưng có lo gì, vì theo tính toán thì mấy tháng là lại vốn thôi, lúc đó tính.</p><p>Sau khi nộp tiền xong, thì đến Tết, quán nghỉ, không có thu nhập. Ra Tết thì ngay lập tức có chuyện, đó là cái quán nó ồn quá nên cái ông hàng xóm gửi đơn thư lên phường, lên Quận, thế là quán không còn được mở nhạc DJ nữa.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/2bf87d74-b9c2-4ff4-b56f-d39c913d968f.jpg\"></p><p><br></p><p>Không có nhạc, không có khách, không có doanh thu…, và tháng nào cũng bù lỗ. Anh M chưa được hưởng miếng tiền lời nào từ quán thì giờ còn phải bù lỗ.</p><p>Và lúc này chị đồng nghiệp lại “rỉ tai” rằng có người muốn mua toàn bộ lại để chuyển đổi mô hình kinh doanh với giá 600tr.</p><p>Cái xui nối tiếp cái rủi, lúc này việc Sale cũng không ăn nên làm ra nữa, sàn giao dịch có dấu hiệu dẹp, thế là anh M quyết định bán, tổng cộng khi nộp tiền vào mua cổ phần bán cổ phần ra, đi tất toán ngân hàng, thì anh M “trắng tay”.</p><p>Chuyển đổi nghề nghiệp qua làm ngân hàng. Lần này không có những khoản thu nhiều như sale, nhưng anh hài lòng với việc đó và làm lại từ đầu.</p><p>Kể dài dòng như trên để kết luận rằng sau một thời gian thì anh M trắng tay, không có tích trữ gì cả.</p><p>Tiếp.</p><p>Khi có thêm một chút tích trữ nữa thì anh cưới vợ, cưới vợ xong thì dư ra 200tr. Lúc này ở Q8 người ta bán miếng đất có giá 1 tỷ 050, anh mua luôn, vì làm ngân hàng nên có bạn bè quen biết, a chỉ mất 200tr để mua miếng đất 1.050tr, phần còn lại ngân hàng hỗ trợ.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/e94eefb0-2abd-4e22-a0ee-3517c44facb0.jpg\"></p><p class=\"ql-align-center\"><br></p><p>Một năm sau, anh bán miếng đất với giá 2 tỷ 160, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2 tỷ 3. Giờ thì căn nhà đó cũng giá cao cao rồi. Đương nhiên nợ thì ảnh vẫn nợ, nhà thì ảnh vẫn có.</p><p>Đó, câu chuyện về căn nhà đầu tiên của anh M nó diễn ra như thế.</p><p>Có người sẽ cho rằng anh M hên, “trúng” liên tục. Tuy nhiên ảnh cũng xui với thương vụ đầu tiên, đôi khi nếu thương vụ đầu tiên liên quan đến cái quán mà ảnh “trúng” thì chưa chắc ảnh đả mua được nhà.</p><p>Cuộc đời này, hên có, xui có, nó là bản chất cuộc sống, tuy nhiên khi chúng ta tập trung và có mục tiêu rõ ràng thì sẽ nắm bắt được cái hên. Thật ra thời gian qua, nhà đất tăng ầm ầm cả Sài Gòn và các vùng lân cận.</p><p>Nhưng trong cái tăng đó, có người dám “nhảy” vào thị trường, có người không dám. Thật ra thì không ai có tài thánh đoán được tương lai, chỉ là vì họ tin vào khả năng của mình và chịu rủi ro.</p><p>P/S: Nói thêm về vụ chỉ có 200tr mà anh M mua được miếng đất 1 tỷ 050 tỷ. Lý do là anh M có 1 người bạn, thời gian đó người bạn đó lại cưới một cô vợ cùng ngân hàng, và theo quy định của ngân hàng thì hai vợ chồng không được làm cùng một ngân hàng, do đó anh chồng quyết định qua ngân hàng khác, vì qua ngân hàng khác thì ngân hàng đó yêu cầu chỉ tiêu vay, thế là anh bạn đó dụ anh M vay luôn với nhiều ưu đãi. Cái cơ hội đến thì anh M “hốt” thôi. Đó là sự may mắn.</p>",
 *       "__v": 54,
 *       "flash": 0,
 *       "image_url": "",
 *       "category": [
 *           {
 *               "_id": "5d809fe2dc23f01c7c85a0b1",
 *               "name": "Phân tích chuyên đề"
 *           }
 *       ]
 *    }
 *  ]
 */


 /**
 * @api {get} /post/count Count Number Of Post
 * @apiVersion 0.1.0
 * @apiName CountNumberOfPost
 * @apiGroup Post
 * @apiSuccess {Int32} number Number Of Post.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    25
 *  }
 */


 /**
 * @api {get} /post/detail Post Detail
 * @apiVersion 0.1.0
 * @apiName PostDetail
 * @apiGroup Post
 * @apiParam {ObjectID} id Post ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d787a7de6122e0490bd78c9"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 * {
 *   "create_uid": {
 *       "_id": "5d679819325ab70ab0157ce5",
 *       "first_name": "admin",
 *       "last_name": "admin"
 *   },
 *   "create_date": "2019-09-11T01:38:42.912Z",
 *   "write_uid": "5d679819325ab70ab0157ce5",
 *   "write_date": "2019-09-25T03:29:17.026Z",
 *   "company_id": "ROOT",
 *   "status": true,
 *   "delete_id": null,
 *   "category_id": [
 *       "5d809fe2dc23f01c7c85a0b1"
 *   ],
 *   "description": "Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi....",
 *   "flash": 0,
 *   "reaction": [
 *       "5d9186129b827e3e2cba87c9",
 *       "5d91867c9b827e3e2cba87ce",
 *       "5d917938f81d183444402b33",
 *       "5d9187d011860542e4ac4499",
 *       "5d9188d7ec45fd0c54cd1c75",
 *       "5d91d35c0f1b9c3ac8bc41e2"
 *   ],
 *   "comment": [],
 *   "publish": true,
 *   "publish_date": "2019-09-23T01:46:19.622Z",
 *   "_id": "5d787a7de6122e0490bd78c9",
 *   "name": "Chuyện thật: Căn nhà đầu tiên của 1 người tôi quen",
 *   "url_name": "chuyen-that-can-nha-dau-tien-cua-1-nguoi-toi-quen",
 *   "sequence": 12,
 *   "keyword": "",
 *   "content": "<p>Anh M là dân 9x, tốt nghiệp Đại học xong thì đi làm cho sàn Môi giới Bất động sản, đó là một trong những việc dễ kiếm nhất, bù lại thì lương cơ bản không cao.</p><p>Nghề sale Bất động sản lên voi xuống chó, trồi sụt tùy vào tình hình thị trường và đôi khi là cái “duyên”, sau thời gian đầu trầy trật thì khoảng một năm sau, mỗi tháng cũng có ít giao dịch nên thu nhập cũng được kha khá.</p><p>Cùng thời gian đó, có một người đồng nghiệp có chồng cùng mấy người bạn mở một quán café nhạc DJ, cũng làm ăn kha khá, vốn đầu tư ban đầu tầm 700tr mà doanh thu mỗi tháng khoảng 350tr (khoảng 12tr/ngày).</p><p>Anh M vì là người có học hành đàng hoàng, nên ngày đi làm sale, tối đi trực quán DJ, thậm chí được nhờ làm báo cáo các khoản thu chi, để nhằm chia lãi cho các cổ đông quán.</p><p>Đó là lý do anh M biết được chính xác doanh thu hàng tháng của quán. Sáng đi làm sale, tối đi làm sếp quán nhiều em chân dài. Oai phong lẫm liệt.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/e2de2bec-1744-487c-abd6-28d077bdb2e2.jpg\"></p><p><br></p><p>Quán hoạt động được tầm 10 tháng, ăn nên làm ra, anh M cũng ăn nên làm ra trong việc sale, lúc này chị đồng nghiệp mới “rỉ tai” là mấy cổ đông quán có chuyện “cơm không lành, canh không ngọt” nên có ý định tách.</p><p>Do đó ghế cổ đông tự nhiên trống, và vì tình cảm chị em nên dành cho anh M 20% với giá 200tr.</p><p>Anh M nhẩm tính thì thấy quá hời, thế nên mới “chơi lớn”, dốc hết hầu bao được 70tr (sale trúng mới dư được nhiêu), cũng thời gian đó, mấy ngân hàng không biết “đánh hơi” kiểu gì mà có thu nhập cao cao xí là gọi dụ vay tín chấp liên tục.</p><p>Kiểu như thời cơ đến, anh M làm hồ sơ vay, dụ lun cậu bạn thời sinh viên góp cho đủ 200tr, dù rằng cái ngân hàng cho vay tín chấp nó “quất” lãi suất tới 3.6%/tháng. Nhưng có lo gì, vì theo tính toán thì mấy tháng là lại vốn thôi, lúc đó tính.</p><p>Sau khi nộp tiền xong, thì đến Tết, quán nghỉ, không có thu nhập. Ra Tết thì ngay lập tức có chuyện, đó là cái quán nó ồn quá nên cái ông hàng xóm gửi đơn thư lên phường, lên Quận, thế là quán không còn được mở nhạc DJ nữa.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/2bf87d74-b9c2-4ff4-b56f-d39c913d968f.jpg\"></p><p><br></p><p>Không có nhạc, không có khách, không có doanh thu…, và tháng nào cũng bù lỗ. Anh M chưa được hưởng miếng tiền lời nào từ quán thì giờ còn phải bù lỗ.</p><p>Và lúc này chị đồng nghiệp lại “rỉ tai” rằng có người muốn mua toàn bộ lại để chuyển đổi mô hình kinh doanh với giá 600tr.</p><p>Cái xui nối tiếp cái rủi, lúc này việc Sale cũng không ăn nên làm ra nữa, sàn giao dịch có dấu hiệu dẹp, thế là anh M quyết định bán, tổng cộng khi nộp tiền vào mua cổ phần bán cổ phần ra, đi tất toán ngân hàng, thì anh M “trắng tay”.</p><p>Chuyển đổi nghề nghiệp qua làm ngân hàng. Lần này không có những khoản thu nhiều như sale, nhưng anh hài lòng với việc đó và làm lại từ đầu.</p><p>Kể dài dòng như trên để kết luận rằng sau một thời gian thì anh M trắng tay, không có tích trữ gì cả.</p><p>Tiếp.</p><p>Khi có thêm một chút tích trữ nữa thì anh cưới vợ, cưới vợ xong thì dư ra 200tr. Lúc này ở Q8 người ta bán miếng đất có giá 1 tỷ 050, anh mua luôn, vì làm ngân hàng nên có bạn bè quen biết, a chỉ mất 200tr để mua miếng đất 1.050tr, phần còn lại ngân hàng hỗ trợ.</p><p class=\"ql-align-center\"><img src=\"http://27.74.250.96:8386/images/post/e94eefb0-2abd-4e22-a0ee-3517c44facb0.jpg\"></p><p class=\"ql-align-center\"><br></p><p>Một năm sau, anh bán miếng đất với giá 2 tỷ 160, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2 tỷ 3. Giờ thì căn nhà đó cũng giá cao cao rồi. Đương nhiên nợ thì ảnh vẫn nợ, nhà thì ảnh vẫn có.</p><p>Đó, câu chuyện về căn nhà đầu tiên của anh M nó diễn ra như thế.</p><p>Có người sẽ cho rằng anh M hên, “trúng” liên tục. Tuy nhiên ảnh cũng xui với thương vụ đầu tiên, đôi khi nếu thương vụ đầu tiên liên quan đến cái quán mà ảnh “trúng” thì chưa chắc ảnh đả mua được nhà.</p><p>Cuộc đời này, hên có, xui có, nó là bản chất cuộc sống, tuy nhiên khi chúng ta tập trung và có mục tiêu rõ ràng thì sẽ nắm bắt được cái hên. Thật ra thời gian qua, nhà đất tăng ầm ầm cả Sài Gòn và các vùng lân cận.</p><p>Nhưng trong cái tăng đó, có người dám “nhảy” vào thị trường, có người không dám. Thật ra thì không ai có tài thánh đoán được tương lai, chỉ là vì họ tin vào khả năng của mình và chịu rủi ro.</p><p>P/S: Nói thêm về vụ chỉ có 200tr mà anh M mua được miếng đất 1 tỷ 050 tỷ. Lý do là anh M có 1 người bạn, thời gian đó người bạn đó lại cưới một cô vợ cùng ngân hàng, và theo quy định của ngân hàng thì hai vợ chồng không được làm cùng một ngân hàng, do đó anh chồng quyết định qua ngân hàng khác, vì qua ngân hàng khác thì ngân hàng đó yêu cầu chỉ tiêu vay, thế là anh bạn đó dụ anh M vay luôn với nhiều ưu đãi. Cái cơ hội đến thì anh M “hốt” thôi. Đó là sự may mắn.</p>",
 *   "__v": 64,
 *   "image_url": "",
 *   "category": [
 *       {
 *           "_id": "5d809fe2dc23f01c7c85a0b1",
 *           "name": "Phân tích chuyên đề"
 *       }
 *   ],
 *   "id": "5d787a7de6122e0490bd78c9"
 * }
 * @apiError MissingPostID Missing Post <code>id</code>.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Missing Post ID"
 *     }
 */


 /**
 * @api {delete} /post/delete Delete Post
 * @apiVersion 0.1.0
 * @apiName DeletePost
 * @apiGroup Post
 * @apiParam {ObjectID} id Post ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d787a7de6122e0490bd78c9"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


  /**
 * @api {put} /post/edit Edit Post
 * @apiVersion 0.1.0
 * @apiName EditPost
 * @apiGroup Post
 * @apiParam {ObjectID} id Post ID.
 * @apiParam {String} status_name Project Status Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d787a7de6122e0490bd78c9",
 *       "description": "Một năm sau, anh bán miếng đất với giá 2.160tr, và ngay lập tức anh qua Q2 mua 1 căn nhà giá 2.300tr. Giờ thì căn nhà đó cũng giá cao cao rồi...."
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 