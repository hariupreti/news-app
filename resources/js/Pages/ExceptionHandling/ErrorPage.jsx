export default function ErrorPage({ code,title,description }) { 
    return (
      <div className="h-full w-full overflow-hidden relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-5xl place-content-center text-center mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center pt-8 sm:justify-start sm:pt-0">
                <div className="px-4 text-lg  tracking-wider">
                  {title} | {code}
                </div>
                <div className="ml-4 mt-8 text-gray-500 uppercase tracking-wider text-left text-xs">
                  {description}
                </div>
            </div>
        </div>
      </div>
    )
  }