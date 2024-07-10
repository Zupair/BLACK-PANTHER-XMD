const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "252653553580";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_52_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDIsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDYzLFxuICAgICAgICA5NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInAyUHptODR1bWRmS3JxaGorUXUyZkNCZXlXcjA3VFAvcFBjc0Z2TmRqdWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjUzNTUzNTgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMUZCRURGQjY1RjVGNzdDNDMxMDVDQkQyRDNFREMwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTIzMTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYjBOXzhUNHhUYWF5RWZKUDBvUjRyUVwiLFxuICBcInBob25lSWRcIjogXCI0ODJlYmQ5Ni04NjMxLTQzZGMtOGQ3NC1kMTc2OTA1YzUyZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgNjcsXG4gICAgICAxNixcbiAgICAgIDY3LFxuICAgICAgMTQ5LFxuICAgICAgMTc2LFxuICAgICAgMzksXG4gICAgICAyMDYsXG4gICAgICAxOSxcbiAgICAgIDE4NyxcbiAgICAgIDE0MCxcbiAgICAgIDEyMSxcbiAgICAgIDMwLFxuICAgICAgMTM2LFxuICAgICAgNTMsXG4gICAgICAxMzYsXG4gICAgICAzOCxcbiAgICAgIDQsXG4gICAgICA1MCxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAxMDUsXG4gICAgICAxMDQsXG4gICAgICAxMzYsXG4gICAgICAxNjcsXG4gICAgICA2NixcbiAgICAgIDI0NSxcbiAgICAgIDcsXG4gICAgICAxOTIsXG4gICAgICAyMDUsXG4gICAgICAxODcsXG4gICAgICAyMjcsXG4gICAgICAxNzAsXG4gICAgICAxOTIsXG4gICAgICAxNjAsXG4gICAgICAyMCxcbiAgICAgIDQxLFxuICAgICAgMjM4LFxuICAgICAgMTA2LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1MzWVdURkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY1MzU1MzU4MDo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTcxMTg5MDQzNDQ4MjM6NzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3FWcFp3SEVNN3J1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyN2VXVUx2cW9DNU1kK2JRandET2Y3QW5WT0todU5QeEQ1blVWSU1WYXhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk4wMS9kQjBSTFN6WnV3YVRDMFBKQW9xS0wvVXY2Skt5U3lWNXl2Y0xtRTlUMXo2NWwrbzhyRU5VcjgxbGdOdjRYcUx0dFZkMFpkMEVvS3pTR0pKMkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJiRXluV1F3Qy9ZbnkxZ3YvdW1FNnNSMFBObmsyTzFmUExCQ0xidk8rZWlMdFM5Y0VZVzY1b0RZNllkZWpOZTRPQk1WOVRvWURKdEZYbk1Kdk81RUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY1MzU1MzU4MDo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTIzMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCSThcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJJOC5qc29uIjogIntcImtleURhdGFcIjpcInFnV1FjeXFMY0FoNkUzeU1Db2t1aEdIa0tnajdIUjNFUlFKeUgxeWZPV0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkzODM3NzQ0NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
