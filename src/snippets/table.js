const table = {
  basicTable: `
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th class="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200" x-max="1">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm leading-5 text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Cody Fisher
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      cody.fisher@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Product Directives Officer</div>
                <div class="text-sm leading-5 text-gray-500">Intranet</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Owner
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Esther Howard
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      esther.howard@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Forward Response Developer</div>
                <div class="text-sm leading-5 text-gray-500">Directives</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Member
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Jenny Wilson
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      jenny.wilson@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Central Security Manager</div>
                <div class="text-sm leading-5 text-gray-500">Program</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Member
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Kristin Watson
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      kristin.watson@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Lead Implementation Liaison</div>
                <div class="text-sm leading-5 text-gray-500">Mobility</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      Cameron Williamson
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      cameron.williamson@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Internal Applications Engineer</div>
                <div class="text-sm leading-5 text-gray-500">Security</div>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Member
              </td>
              <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`,
}

export { table }
