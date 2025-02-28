import os
import frontmatter
from datetime import datetime
from collections import defaultdict

def get_posts():
    posts = []
    for root, _, files in os.walk('posts'):
        for file in files:
            if file.endswith('.md'):
                path = os.path.join(root, file)
                post = frontmatter.load(path)
                post.metadata['path'] = path
                posts.append(post)
    return sorted(posts, key=lambda x: x.metadata['date'], reverse=True)

def update_readme(posts):
    try:
        with open('README.md', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading README.md: {e}")
        return

    recent_posts = []
    year = None
    month = None
    for post in posts:  # Show all posts
        date_str = post.metadata['date'].strftime('%Y-%m-%d')
        year_str = post.metadata['date'].strftime('%Y')
        month_int = int(post.metadata['date'].strftime('%m'))  # Get month as integer
        title = post.metadata['title']
        path = post.metadata['path'].replace('\\', '/')

        if year != year_str:
            recent_posts.append(f"## {year_str} 年")
            year = year_str
            month = None # Reset month when year changes

        if month != month_int:
            recent_posts.append(f"\n### {month_int} 月\n")
            month = month_int

        recent_posts.append(f"- {date_str} [{title}](<{path}>)")

    posts_list = '\n'.join(recent_posts)

    start_marker = '<!-- BLOG-POST-LIST:START -->'
    end_marker = '<!-- BLOG-POST-LIST:END -->'

    try:
        parts = content.split(start_marker)
        if len(parts) < 2:
            print(f"Error: Start marker '{start_marker}' not found in README.md")
            return
        new_content = parts[0] + start_marker + '\n'
        new_content += posts_list + '\n'
        new_content += end_marker + content.split(end_marker)[1]

    except Exception as e:
        print(f"Error processing markers in README.md: {e}")
        return

    try:
        with open('README.md', 'w', encoding='utf-8') as f:
            f.write(new_content)
    except Exception as e:
        print(f"Error writing to README.md: {e}")
        return

def update_tags(posts):
    tags = defaultdict(list)
    for post in posts:
        for tag in post.metadata.get('tags', []):
            tags[tag].append(post)

    content = '# Tags\n\n'
    for tag in sorted(tags.keys()):
        content += f'## {tag}\n\n'
        for post in sorted(tags[tag], key=lambda x: x.metadata['date'], reverse=True):
            date_str = post.metadata['date'].strftime('%Y-%m-%d')
            title = post.metadata['title']
            path = post.metadata['path'].replace('\\', '/')
            content += f"- {date_str} [{title}]({path})\n"
        content += '\n'

    with open('tags.md', 'w', encoding='utf-8') as f:
        f.write(content)

def update_categories(posts):
    categories = defaultdict(list)
    for post in posts:
        category_value = post.metadata.get('category', 'Uncategorized')

        # Ensure we are working with a list
        if not isinstance(category_value, list):
            category_value = [category_value]

        # Iterate through the list of categories and add the post to each
        for category in category_value:
            categories[category].append(post)

    content = '# Categories\n\n'
    for category in sorted(categories.keys()):
        content += f'## {category}\n\n'
        for post in sorted(categories[category], key=lambda x: x.metadata['date'], reverse=True):
            date_str = post.metadata['date'].strftime('%Y-%m-%d')
            title = post.metadata['title']
            path = post.metadata['path'].replace('\\', '/')
            content += f"- {date_str} [{title}]({path})\n"
        content += '\n'

    with open('categories.md', 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    posts = get_posts()
    update_readme(posts)
    update_tags(posts)
    update_categories(posts)

if __name__ == '__main__':
    main()