import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Pagination({ total, current, basePath, spread }) {
  const pages = [...Array(total).keys()].map((i) => i + 1);

  return (
    <nav className="px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex" key="previous">
        {current > 1 && (
          <Link
            type="a"
            href={`${basePath}/${current - 1}`}
            className="pt-4 pr-1 inline-flex items-center text-sm text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="fa-fw mr-2"
              aria-hidden="true"
            />
            Newer
          </Link>
        )}
      </div>
      <div className="hidden lg:-mt-px lg:flex" key="middle">
        {pages.map((page) => (
          <div key={"middle-list-" + page}>
            {page === current - (spread + 1) && current > spread + 2 && (
              <span className="border-transparent text-gray-400 border-t pt-4 px-4 inline-flex items-center text-sm">
                ...
              </span>
            )}
            {page === current && (
              <a
                className="text-gray-200 border-gray-600 font-medium border-t pt-4 px-4 inline-flex items-center text-sm"
                aria-current="page"
              >
                {page}
              </a>
            )}
            {page !== current &&
              ((page <= current + spread && page >= current - spread) ||
                page >= total ||
                page <= 1) && (
                <Link
                  type="a"
                  href={`${basePath}/${page}`}
                  className="border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-200 border-t pt-4 px-4 inline-flex items-center text-sm cursor-pointer transition-colors duration-300"
                >
                  {page}
                </Link>
              )}
            {page === current + spread && current < total - (spread + 1) && (
              <span className="border-transparent text-gray-400 border-t pt-4 px-4 inline-flex items-center text-sm">
                ...
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end" key="next">
        {current < total && (
          <Link
            type="a"
            href={`${basePath}/${current + 1}`}
            className="pt-4 pl-1 inline-flex items-center text-sm text-gray-400 hover:text-gray-200 cursor-pointer transition-colors duration-300"
          >
            Older
            <FontAwesomeIcon
              icon={faChevronRight}
              className="fa-fw ml-2"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Pagination;
