/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/ticketingsystem.json`.
 */
export type Ticketingsystem = {
  "address": "BWmuCxJqRqUwXu7rH4oJ5fYUQJjpu5umSw3SUidkY1Lq",
  "metadata": {
    "name": "ticketingsystem",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addNewEvent",
      "discriminator": [
        3,
        93,
        90,
        63,
        78,
        138,
        236,
        213
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true,
          "signer": true
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "creationDate",
          "type": "string"
        },
        {
          "name": "price",
          "type": "i32"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "initialAmountOfTickets",
          "type": "i32"
        }
      ]
    },
    {
      "name": "buyTicket",
      "discriminator": [
        11,
        24,
        17,
        193,
        168,
        116,
        164,
        169
      ],
      "accounts": [
        {
          "name": "ticket",
          "writable": true,
          "signer": true
        },
        {
          "name": "buyer",
          "writable": true,
          "signer": true
        },
        {
          "name": "event"
        },
        {
          "name": "creator"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "transactionDate",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "i32"
        }
      ]
    },
    {
      "name": "deleteEvent",
      "discriminator": [
        103,
        111,
        95,
        106,
        232,
        24,
        190,
        84
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "creator",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "editEvent",
      "discriminator": [
        175,
        88,
        87,
        49,
        41,
        144,
        33,
        42
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "creator"
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "i32"
        },
        {
          "name": "country",
          "type": "string"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "address",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "initialAmountOfTickets",
          "type": "i32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "event",
      "discriminator": [
        125,
        192,
        125,
        158,
        9,
        115,
        152,
        233
      ]
    },
    {
      "name": "ticket",
      "discriminator": [
        41,
        228,
        24,
        165,
        78,
        90,
        235,
        200
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidDelete",
      "msg": "NOT ALLOWED TO DELETE"
    },
    {
      "code": 6001,
      "name": "invalidCreator",
      "msg": "Invalid Creator"
    }
  ],
  "types": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "creationDate",
            "type": "string"
          },
          {
            "name": "price",
            "type": "i32"
          },
          {
            "name": "country",
            "type": "string"
          },
          {
            "name": "city",
            "type": "string"
          },
          {
            "name": "address",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "initialAmountOfTickets",
            "type": "i32"
          },
          {
            "name": "amountOfTicketsSold",
            "type": "i32"
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "pubkey"
          },
          {
            "name": "eventId",
            "type": "pubkey"
          },
          {
            "name": "buyerId",
            "type": "pubkey"
          },
          {
            "name": "transactionDate",
            "type": "string"
          },
          {
            "name": "amount",
            "type": "i32"
          },
          {
            "name": "totalPrice",
            "type": "i32"
          }
        ]
      }
    }
  ]
};
