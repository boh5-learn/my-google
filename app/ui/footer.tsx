export default function Footer() {
  return (
      <div className="flex justify-between mt-auto bg-gray-200 h-12 items-center px-5 text-sm">
        <div className="flex justify-between">
          <a className="p-4 hover:underline" href="#">关于Google</a>
          <a className="p-4 hover:underline" href="#">广告</a>
          <a className="p-4 hover:underline" href="#">商务</a>
          <a className="p-4 hover:underline" href="#">Google搜索的运作方式</a>
        </div>
        <div className="flex justify-between">
          <a className="p-4 hover:underline" href="#">隐私权</a>
          <a className="p-4 hover:underline" href="#">条款</a>
          <a className="p-4 hover:underline" href="#">设置</a>
        </div>
      </div>
  )
}