export default function JobDetails() {
  return (
    <div className=" mx-auto space-y-4">
      {/* Job Details Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-4">Vacaturedetails</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Antwerpen, België
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            40uur/week
            <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded">
              Permanent
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            €0.00
          </li>
        </ul>

        <div className="mt-4 text-sm text-gray-800 space-y-1">
          <p>
            <span className="font-medium">Startdatum</span> Zo snel mogelijk
          </p>
          <p>
            <span className="font-medium">Einddatum</span> Onbepaald
          </p>
        </div>

        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded text-sm">
          SOLLICITEER NU
        </button>
      </div>

      {/* Contact Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <p className="text-gray-700 text-sm mb-4">
          Heb je vragen of wil je meer informatie over de vacature Responsable
          Commercial Automobile in Antwerpen, België? Neem gerust contact op met
        </p>
        <p className="font-bold mb-4">Martijn van der Valk</p>

        <div className="space-y-2 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33302 8.00004C1.33302 4.31814 4.31778 1.33337 7.99968 1.33337C11.6816 1.33337 14.6663 4.31814 14.6663 8.00004C14.6663 11.6819 11.6816 14.6667 7.99968 14.6667C6.99674 14.6667 6.04432 14.4449 5.18991 14.0473L1.92498 14.6582C1.7613 14.6888 1.59311 14.6359 1.4764 14.5172C1.35968 14.3984 1.30975 14.2293 1.34322 14.0662L1.99366 10.8968C1.5702 10.0202 1.33302 9.03717 1.33302 8.00004ZM4.33301 8.00004C4.33301 8.36824 4.63149 8.66671 4.99968 8.66671C5.36786 8.66671 5.66634 8.36824 5.66634 8.00004C5.66634 7.63184 5.36786 7.33337 4.99968 7.33337C4.63149 7.33337 4.33301 7.63184 4.33301 8.00004ZM7.33301 8.00004C7.33301 8.36824 7.63148 8.66671 7.99968 8.66671C8.36788 8.66671 8.66634 8.36824 8.66634 8.00004C8.66634 7.63184 8.36788 7.33337 7.99968 7.33337C7.63148 7.33337 7.33301 7.63184 7.33301 8.00004ZM10.9997 8.66671C10.6315 8.66671 10.333 8.36824 10.333 8.00004C10.333 7.63184 10.6315 7.33337 10.9997 7.33337C11.3679 7.33337 11.6663 7.63184 11.6663 8.00004C11.6663 8.36824 11.3679 8.66671 10.9997 8.66671Z" fill="#A9A29D"/>
</svg></span> WHATSAPP
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.12176 2.86853C6.00883 2.64267 5.77799 2.5 5.52548 2.5H3.16667C2.79848 2.5 2.5 2.79848 2.5 3.16667V3.875C2.5 9.19073 6.80927 13.5 12.125 13.5H12.8333C13.2015 13.5 13.5 13.2015 13.5 12.8333V10.4745C13.5 10.222 13.3573 9.99113 13.1315 9.87827L11.1798 8.9024C10.9231 8.77407 10.6131 8.82433 10.4102 9.02727L10.0296 9.40793C9.841 9.59647 9.55673 9.65693 9.31473 9.54487C7.9656 8.92013 7.07987 8.0344 6.45514 6.68527C6.34307 6.44329 6.40352 6.15898 6.59209 5.97041L6.97273 5.58977C7.17567 5.38686 7.22593 5.07688 7.0976 4.82022L6.12176 2.86853Z" fill="#A9A29D"/>
</svg></span> +31623473432
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.16634 2.66663C2.15382 2.66663 1.33301 3.48744 1.33301 4.49996V4.52621L7.62507 7.69223C7.86074 7.81083 8.13861 7.81083 8.37421 7.69223L14.6663 4.52621V4.49996C14.6663 3.48744 13.8455 2.66663 12.833 2.66663H3.16634Z" fill="#A9A29D"/>
  <path d="M14.6663 5.64575L8.82374 8.58564C8.30534 8.84644 7.69401 8.84644 7.17561 8.58564L1.33301 5.64575V11.5C1.33301 12.5126 2.15382 13.3334 3.16634 13.3334H12.833C13.8455 13.3334 14.6663 12.5126 14.6663 11.5V5.64575Z" fill="#A9A29D"/>
</svg></span> info@htctechniek.nl
          </div>
        </div>
      </div>
    </div>
  );
}
