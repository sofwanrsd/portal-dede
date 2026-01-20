import { readFile } from 'fs/promises';
import { join } from 'path';
import { siteConfig } from './config';

interface MenuItem {
  label: string;
  subtitle: string;
  icon: string;
  link: string;
  active: boolean;
  status?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

async function getMenuData(): Promise<MenuCategory[]> {
  try {
    const filePath = join(process.cwd(), 'public', 'data', 'menu.json');
    const fileContents = await readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading menu:', error);
    return [];
  }
}

export default async function HomePage() {
  const menuData = await getMenuData();

  return (
    <>
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <main className="glass-card rounded-[20px] p-6 w-full max-w-[480px]">
          {/* Brand Section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 relative flex items-center justify-center rounded-full overflow-hidden border-2 border-taveve-orange/30 bg-white/5 backdrop-blur-sm drop-shadow-[0_0_15px_rgba(128,0,32,0.3)] hover:border-taveve-orange/60 transition-colors duration-300">
              <img 
                src={siteConfig.logo} 
                alt={`${siteConfig.name} Logo`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h1 className="text-2xl font-bold mb-1">{siteConfig.name}</h1>
            <p className="text-sm text-gray-400">{siteConfig.description}</p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-6">
            {menuData.map((category, catIndex) => (
              <div key={catIndex}>
                {/* Category Title */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-taveve-orange/30 to-transparent"></div>
                  <span className="text-xs font-semibold text-taveve-orange uppercase tracking-wider px-2">
                    {category.category}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-taveve-orange/30 to-transparent"></div>
                </div>

                {/* Category Items */}
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    item.active ? (
                      // Active Item - Clickable
                      <a
                        key={itemIndex}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card glass-card-hover rounded-[12px] px-4 py-3 flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-taveve-orange/15 flex items-center justify-center group-hover:bg-taveve-orange/25 transition-colors">
                            <i className={`${item.icon} text-taveve-orange text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="font-semibold text-[14px] mb-0.5">{item.label}</h3>
                            <p className="text-xs text-gray-400">{item.subtitle}</p>
                          </div>
                        </div>
                        <i className="ri-arrow-right-s-line text-taveve-orange text-lg opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </a>
                    ) : (
                      // Inactive Item - Not Clickable
                      <div
                        key={itemIndex}
                        className="glass-card rounded-[12px] px-4 py-3 flex items-center justify-between group opacity-50 cursor-not-allowed relative"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-500/15 flex items-center justify-center">
                            <i className={`${item.icon} text-gray-500 text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="font-semibold text-[14px] mb-0.5 text-gray-400">{item.label}</h3>
                            <p className="text-xs text-gray-500">{item.subtitle}</p>
                          </div>
                        </div>
                        {/* Status Badge */}
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-taveve-orange/20 text-taveve-orange">
                          {item.status || 'Coming Soon'}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <a 
              href={siteConfig.footer.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-taveve-orange transition-colors inline-flex items-center justify-center gap-1"
            >
              {siteConfig.footer.text}
              <i className="ri-external-link-line text-xs"></i>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
