import React, { useState, useEffect } from 'react';

const generateRandomNumbers = () => {
  // Generate an array of numbers from 1 to 90
  let numbers = Array.from({ length: 90 }, (_, index) => index + 1);

  // Shuffle the array to randomize the numbers
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
};

const generateTickets = (numTickets) => {
  let tickets = [];

  for (let t = 0; t < numTickets; t++) {
    let ticket = [];

    // Generate random numbers
    let numbers = generateRandomNumbers();

    // Create 3 rows with 5 numbers each
    for (let i = 0; i < 3; i++) {
      let row = Array.from({ length: 9 }, () => null); // Initialize row with null values
      let filledIndexes = [];

      // Randomly select 5 indexes for each row
      while (filledIndexes.length < 5) {
        let randomIndex = Math.floor(Math.random() * 9);
        if (!filledIndexes.includes(randomIndex)) {
          row[randomIndex] = numbers.pop();
          filledIndexes.push(randomIndex);
        }
      }

      ticket.push(row);
    }

    tickets.push(ticket);
  }

  return tickets;
};

const TambolaTicket = ({ numTickets }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const generatedTickets = generateTickets(numTickets);
    setTickets(generatedTickets);
  }, [numTickets]);

  return (
    <div className="ticket-table">
      {tickets.map((ticket, ticketIndex) => (
        <div key={ticketIndex} className="row justify-content-center">
          <div className="col-md-12 ">
            <div className='ticker-card'> 
                <label htmlFor={`ticket-${ticketIndex}`}>Ticket No. {ticketIndex + 1}</label>
                <div className="p-2">
                    <table className="">
                        <tbody>
                            {ticket.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={` cust-table-col ${cell ? 'filled' : ''}`}
                                >
                                    {cell}
                                </td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TambolaTicket;
