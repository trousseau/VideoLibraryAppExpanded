using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute("VideoLibraryAppExpanded",typeof(VideoLibraryAppExpanded.Startup))]
namespace VideoLibraryAppExpanded
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
