import React from 'react'

const Avatar = ({initials}) => {

  const getInitials =  (input) => {
    let names = input.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

  return (
    <div>
      <div className="inline-flex overflow-hidden relative justify-center items-center w-8 h-8 bg-slate-800 rounded-full ">
    <span className="font-subheading text-white"> {initials !== null && getInitials(initials)}</span>
</div>
    </div>
  )
}

export default Avatar
