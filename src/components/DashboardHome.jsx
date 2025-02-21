import React, { useState } from 'react'
import DashBoardWidget from './DashBoardWidjet'
import { widgets } from '../../data';

const DashboardHome = () => {
    const [activeWidgets, setActiveWidgets] = useState(widgets);
    
      const removeWidget = (id) => {        
        setActiveWidgets(activeWidgets.filter(widget => widget.id !== id));
      };
      const addWidget = (widget) => {
        setActiveWidgets([...activeWidgets, widget]);
      };

  return (
    <div className='px-3'>
        <div className="my-4">
        {widgets
          .filter(widget => !activeWidgets.some(active => active.id === widget.id))
          .map(widget => (
            <button
              key={widget.id}
              onClick={() => addWidget(widget)}
              className="mr-2 p-2 bg-gray-800 shadow-md text-white rounded-md"
            >
              Add {widget.title}
            </button>
          ))}
      </div>

        <div className='grid grid-cols-3 gap-2'>
            {
                activeWidgets.map((item)=>(
                    <DashBoardWidget key={item.id} id={item.id} item={item} title={item.title} address={item?.address} alternateemail={item?.alternateemail} bachelors={item?.bachelors} discipline={item?.discipline} email={item?.email} feesPayment={item?.feesPayment} joinDate={item?.joinDate} lastDate={item?.lastDate} name={item?.name} pendingStatus={item?.pendingStatus} phoneno={item?.phoneno} uploadCertificates={item?.uploadCertificates} removeWidget={removeWidget}/>
                ))
            }
        </div>

        {/* <Sample /> */}
    </div>
  )
}

export default DashboardHome