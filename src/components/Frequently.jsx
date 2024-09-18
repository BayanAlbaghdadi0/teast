import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t-2 border-t-stone-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg poppins-medium ">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div
          className="p-4 text-gray-900 poppins-light"
          dangerouslySetInnerHTML={{ __html: answer }}
        />}
    </div>
  );
}

export function Frequently() {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 mb-8">
      <h1 className="text-3xl poppins-light mb-6 text-center">Frequently Asked Questions</h1>

      <FAQItem
        question="Is Firebee Safe?"
        answer="Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is <strong class='font-bold'> 3000x less powerful </strong> than your average smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested by users for efficacy and safety. "
      />
      <FAQItem
        question="How Does Firebee work?"
        answer="Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.

        Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.
        
        Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. 
        
        Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. 
        
        Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. "
      />
      <FAQItem
        question="Will Firebee Fit on My Head? "
        answer="Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.
        "
      />
      <FAQItem
        question="What If I want the signal to stop? "
        answer="Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes."
      />
      <FAQItem
        question="How do you charge Firebee? "
        answer="Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. "
      />
    </div>
  );
}

