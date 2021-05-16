using TextParser.Models;
using System.Linq;

namespace TextParser.DAL
{
    public static class DbIntializer
    {
        public static void Initialize(FileContext context)
        {
            context.Database.EnsureCreated();

            if(context.Files.Any())
            {
                return;
            }

            // Adding a sample file
            DbFileModel file = new()
            {
                FileName = "Demo.txt",
                FileContent = 
                "This is a sample file for you to try the commands\nGo ahead don't feel shy." +
                "\nHere is some lorep ipsum:"+
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
                "Imperdiet proin fermentum leo vel. Est ultricies integer quis auctor elit sed vulputate mi sit. Ac turpis egestas sed tempus urna et pharetra pharetra massa.\n" +
                "Quis enim lobortis scelerisque fermentum dui. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Etiam dignissim diam quis enim. Duis at consectetur lorem donec massa sapien.\n" +
                "Nisl purus in mollis nunc sed id. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Auctor augue mauris augue neque gravida in fermentum. Lacus vestibulum sed arcu non. Eget dolor morbi non arcu risus.\b" +
                "Neque egestas congue quisque egestas. Ut tristique et egestas quis. Ut enim blandit volutpat maecenas volutpat blandit. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi" +
                "Ultricies integer quis auctor elit sed vulputate mi sit.Nullam vehicula ipsum a arcu.Lacus sed viverra tellus in hac habitasse platea.Ornare quam viverra orci sagittis eu volutpat.\n" +
                "Dolor sit amet consectetur adipiscing elit ut.Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.Praesent semper feugiat nibh sed pulvinar\n" +
                ".Consectetur a erat nam at lectus urna.Ultricies integer quis auctor elit sed vulputate mi sit amet.Morbi tincidunt ornare massa eget egestas purus viverra.Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.\n" +
                "Id consectetur purus ut faucibus.Consequat nisl vel pretium lectus quam.Adipiscing bibendum est ultricies integer.Ornare arcu odio ut sem nulla pharetra.Egestas sed tempus urna et pharetra pharetra massa massa ultricies.\n" +
                "Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc.\n\n"+
                 "Nisl purus in mollis nunc sed id. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Auctor augue mauris augue neque gravida in fermentum. Lacus vestibulum sed arcu non. Eget dolor morbi non arcu risus.\b" +
                "Neque egestas congue quisque egestas. Ut tristique et egestas quis. Ut enim blandit volutpat maecenas volutpat blandit. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi" +
                "Ultricies integer quis auctor elit sed vulputate mi sit.Nullam vehicula ipsum a arcu.Lacus sed viverra tellus in hac habitasse platea.Ornare quam viverra orci sagittis eu volutpat.\n" +
                "Dolor sit amet consectetur adipiscing elit ut.Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.Praesent semper feugiat nibh sed pulvinar\n" +
                ".Consectetur a erat nam at lectus urna.Ultricies integer quis auctor elit sed vulputate mi sit amet.Morbi tincidunt ornare massa eget egestas purus viverra.Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.\n" +
                "Id consectetur purus ut faucibus.Consequat nisl vel pretium lectus quam.Adipiscing bibendum est ultricies integer.Ornare arcu odio ut sem nulla pharetra.Egestas sed tempus urna et pharetra pharetra massa massa ultricies.\n" +
                "Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc."
            };
            context.Files.Add(file);
            context.SaveChanges();
        }
    }
}
