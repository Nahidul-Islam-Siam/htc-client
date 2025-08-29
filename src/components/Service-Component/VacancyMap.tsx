import React from "react";

function VacancyMap() {
  return (
    <div className="w-full max-w-3xl ">
      <h2 className="text-lg font-semibold mb-2">Locatie</h2>
      <div className="overflow-hidden rounded-lg shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10014.478486770956!2d4.39756615!3d51.2194474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6a2281bb2fd%3A0x40099ab2f4d4c10!2sAntwerp!5e0!3m2!1sen!2sbe!4v1692276800000!5m2!1sen!2sbe"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        />
      </div>
    </div>
  );
}

export default VacancyMap;
