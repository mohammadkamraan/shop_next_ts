import { sidebarItems } from "../Sidebar";

interface componentProps {
  sidebarItem: sidebarItems;
}

const SidebarItem = ({ sidebarItem }: componentProps) => {
  return (
    <div
      className={`w-full inline-flex items-center mt-10 text-xl font-bold ${
        sidebarItem.exists ? "text-slate-700" : "text-slate-500"
      }`}
    >
      <div className='inline-flex grow items-center'>
        {sidebarItem.svg}
        <p className='ml-5'>{sidebarItem.categoryName}</p>
      </div>
      {sidebarItem.exists && (
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
