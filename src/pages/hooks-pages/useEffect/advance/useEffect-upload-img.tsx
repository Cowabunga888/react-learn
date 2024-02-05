import { useEffect, useState } from 'react'

function UseEffectUploadImg() {
	const [imgUrl, setImgUrl] = useState<string>('')

	const handlePreviewImg = (e: any) => {
		if (e?.target?.files[0]) {
			const url = URL.createObjectURL(e.target.files[0])
			setImgUrl(url)
		}
	}
	useEffect(() => {
		// cần dọn url img ra khỏi bộ nhớ trước khi chọn ảnh tiếp theo
		// nếu không app vẫn giữ url blob cũ trong suốt quá trình chạy, cho đến khi tắt tab
		// dọn url blob cũ bằng clean up func trong useEffect

		return () => {
			imgUrl 
			&& URL.revokeObjectURL(imgUrl)
		}
	}, [imgUrl])

	return (
		<>
			<input type="file" name="img" accept="image/png, image/jpeg" onChange={handlePreviewImg} />

			{imgUrl && (
				<div className="w-[300px] h-[300px]">
					<img src={imgUrl} className="w-full h-full object-cover" />
				</div>
			)}
		</>
	)
}

export default UseEffectUploadImg
