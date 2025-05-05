// import { log } from "console";
// import { Ctx, On, Start, Update } from "nestjs-telegraf";
// import { Context } from "telegraf";

// @Update()
// export class BotUpdate {
//   @Start()
//   async onStart(@Ctx() ctx: Context) {
//     await ctx.reply("hi! Welcome to the bot.");
//   }

// //   @On("text")
// //   async onText(@Ctx() ctx: Context) {
// //     console.log(ctx);
// //     if ("text" in ctx.message!) {
// //       if (ctx.message.text == "salom") {
// //         await ctx.replyWithHTML("<b>hello there!<b>");
// //       } else {
// //         await ctx.replyWithHTML(ctx.message.text);
// //       }

//      const text = ctx.message.text.toLowerCase().trim();
//     try {
//       if (text === "salom") {
//         await ctx.replyWithHTML("<b>Hello there!</b>");
//       } else {
//         await ctx.replyWithHTML(text);
//       }
//     } catch (error) {
//       console.error("Error processing message:", error);
//       await ctx.reply("An error occurred. Please try again.");
//     }

// // }

import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from "nestjs-telegraf";
import { Context, Markup } from "telegraf";
import { keyboard } from "telegraf/typings/markup";
import { BotService } from "./bot.service";

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.start(ctx);
  }

  @On("contact")
  async onContact(@Ctx() ctx: Context) {
    return this.botService.onContact(ctx);
  }

  @Command("stop")
  async onStop(@Ctx() ctx: Context) {
    return this.botService.onStop(ctx);
  }

  //   // Command handler for /inline command
  //   @Command("inline")
  //   async onCommandInline(@Ctx() ctx: Context) {
  //     console.log("Received /inline command");

  //     const inlineKeyboard = {
  //       reply_markup: {
  //         inline_keyboard: [
  //           [{ text: "1", callback_data: "btn1" }],
  //           [
  //             { text: "2", callback_data: "btn2" },
  //             { text: "3", callback_data: "btn3" },
  //           ],
  //           [
  //             { text: "4", callback_data: "btn4" },
  //             { text: "5", callback_data: "btn5" },
  //             { text: "6", callback_data: "btn6" },
  //           ],
  //         ],
  //       },
  //     };

  //     // Send the inline keyboard with the pyramid structure
  //     await ctx.reply("Piramida shaklidagi tugmalar:", inlineKeyboard);
  //   }

  //   // Action handler for button 1
  //   @Action("btn1")
  //   async handleBtn1(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 1-ni tanladingiz.");
  //   }

  //   // Action handler for button 2
  //   @Action("btn2")
  //   async handleBtn2(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 2-ni tanladingiz.");
  //   }

  //   // Action handler for button 3
  //   @Action("btn3")
  //   async handleBtn3(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 3-ni tanladingiz.");
  //   }

  //   // Action handler for button 4
  //   @Action("btn4")
  //   async handleBtn4(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 4-ni tanladingiz.");
  //   }

  //   // Action handler for button 5
  //   @Action("btn5")
  //   async handleBtn5(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 5-ni tanladingiz.");
  //   }

  //   // Action handler for button 6
  //   @Action("btn6")
  //   async handleBtn6(@Ctx() ctx: Context) {
  //     await ctx.answerCbQuery();
  //     await ctx.reply("Siz 6-ni tanladingiz.");
  //   }

  //   // Handle general text messages
  //   @On("text")
  //   async onText(@Ctx() ctx: Context) {
  //     // Ensure ctx.message exists and has text
  //     if (!ctx.message || !("text" in ctx.message)) {
  //       return ctx.reply("Sorry, I can only process text messages.");
  //     }

  //     const text = ctx.message.text.toLowerCase().trim();
  //     try {
  //       if (text === "hi") {
  //         await ctx.replyWithHTML("<b>Hello there!</b>");
  //       } else {
  //         await ctx.replyWithHTML(text);
  //       }
  //     } catch (error) {
  //       console.error("Error processing message:", error);
  //       await ctx.reply("An error occurred. Please try again.");
  //     }
  //   }

  //   // Handle received photos
  //   @On("photo")
  //   async onPhoto(@Ctx() ctx: Context) {
  //     try {
  //       if (!ctx.message || !("photo" in ctx.message)) {
  //         return ctx.reply("I expected a photo, but couldn't find one.");
  //       }

  //       const photos = ctx.message.photo;
  //       const highestResPhoto = photos[photos.length - 1];

  //       await ctx.reply("Nice photo! I received it. 📸");

  //       // Optionally send it back
  //       await ctx.replyWithPhoto(highestResPhoto.file_id);
  //     } catch (error) {
  //       console.error("Error processing photo:", error);
  //       await ctx.reply("An error occurred while handling the photo.");
  //     }
  //   }

  //   // Handle received videos
  //   @On("video")
  //   async onVideo(@Ctx() ctx: Context) {
  //     try {
  //       if (!ctx.message || !("video" in ctx.message)) {
  //         return ctx.reply("I expected a video, but couldn't find one.");
  //       }

  //       const videos = ctx.message.video;
  //       await ctx.reply("Nice video! I received it. 📸");
  //     } catch (error) {
  //       console.error("Error processing video:", error);
  //       await ctx.reply("An error occurred while handling the video.");
  //     }
  //   }

  //   // Handle received stickers
  //   @On("sticker")
  //   async onSticker(@Ctx() ctx: Context) {
  //     try {
  //       if (!ctx.message || !("sticker" in ctx.message)) {
  //         return ctx.reply("I expected a sticker, but couldn't find one.");
  //       }

  //       const sticker = ctx.message.sticker;
  //       await ctx.reply("Nice sticker! I received it. 📸");
  //     } catch (error) {
  //       console.error("Error processing sticker:", error);
  //       await ctx.reply("An error occurred while handling the sticker.");
  //     }
  //   }

  //   // Handle received voice messages
  //   @On("voice")
  //   async onVoice(@Ctx() ctx: Context) {
  //     try {
  //       if (!ctx.message || !("voice" in ctx.message)) {
  //         return ctx.reply("I can only process voice messages.");
  //       }

  //       const voice = ctx.message.voice;
  //       await ctx.reply("🎤 Ovozli xabaringizni oldim!");
  //     } catch (error) {
  //       console.error("Error processing voice message:", error);
  //       await ctx.reply("An error occurred while handling the voice message.");
  //     }
  //   }

  //   // Handle location messages
  //   @On("location")
  //   async onLocation(@Ctx() ctx: Context) {
  //     try {
  //       if (!ctx.message || !("location" in ctx.message)) {
  //         return ctx.reply("I expected a location, but couldn't find one.");
  //       }

  //       const { latitude, longitude } = ctx.message.location;
  //       await ctx.reply(
  //         `📍 Location received!\nLatitude: ${latitude}\nLongitude: ${longitude}`
  //       );
  //       await ctx.replyWithLocation(longitude, latitude);
  //     } catch (error) {
  //       console.error("Error processing location:", error);
  //       await ctx.reply("An error occurred while handling the location.");
  //     }
  //   }

  //   // Handle help command
  //   @Command("help")
  //   async onCommandHelp(@Ctx() ctx: Context) {
  //     await ctx.reply("Ertaga yordam beraman 😄");
  //   }
  //  @Command("main")
  //   async onMain(@Ctx() ctx: Context) {
  //     await ctx.reply("Quyidagi menyudan tanlang:", Markup.keyboard([
  //       ["📋 Buyurtma berish"],
  //       ["ℹ️ Ma'lumot olish"],
  //       ["📞 Admin bilan bog'lanish"],
  //     ])
  //     .resize()
  //     .oneTime());
  //   }

  //   @Hears("📋 Buyurtma berish")
  //   async onOrder(@Ctx() ctx: Context) {
  //     await ctx.reply("Buyurtma berish bo‘limiga xush kelibsiz!");
  //   }

  //   @Hears("ℹ️ Ma'lumot olish")
  //   async onInfo(@Ctx() ctx: Context) {
  //     await ctx.reply("Siz bu bot orqali buyurtma bera olasiz.");
  //   }

  //   @Hears("📞 Admin bilan bog'lanish")
  //   async onContact(@Ctx() ctx: Context) {
  //     await ctx.reply("Admin: @your_admin_username");
  //   }

  //   // Handle any general message
  @On("message")
  async onMessage(@Ctx() ctx: Context) {
    console.log(ctx.botInfo);
    console.log(ctx.chat);
    console.log(ctx.chat?.id);
    console.log(ctx.from);
    console.log(ctx.from?.id);
    console.log(ctx.from?.username);
    console.log(ctx.from?.is_bot);
    console.log(ctx.from?.is_premium);
  }
}
