
ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2 (master)
$ git clone https://github.com/bryanhirsch/rhymes
Cloning into 'rhymes'...
remote: Enumerating objects: 23, done.
remote: Total 23 (delta 0), reused 0 (delta 0), pack-reused 23
Unpacking objects: 100% (23/23), done.

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2 (master)
$ cd rhymes

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git init
Reinitialized existing Git repository in C:/Users/ASUS/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes/.git/

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ touch README.txt

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git add README.txt

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'First commit.'
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git diff
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory
diff --git a/README.txt b/README.txt
index c83e022..9ef4a73 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1,2 @@
 This repo is a collection of my favorite nursery rhymes.
+This repo is a collection of my favorite nursery rhymes.

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git add README.txt
warning: LF will be replaced by CRLF in README.txt.
The file will have its original line endings in your working directory

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'Added project overview to README.txt'
[master 83d3b90] Added project overview to README.txt
 1 file changed, 1 insertion(+)

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git add all-around-the-mulberry-bush.txt

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'Added all-around-the-mulberry-bush.txt.'
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git add jack-and-jill.txt

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'Added jack-and-jill.txt.'
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git add .

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt'
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git log
commit 83d3b90e847f7bf7f787da9d499fb8b05b640548 (HEAD -> master)
Author: Syofia <syofia1700016062@webmail.uad.ac.id>
Date:   Fri Feb 21 14:36:43 2020 +0700

    Added project overview to README.txt

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

commit 4b153702f71a789d019f6b5734fc29a10021d898
Author: Bob <bob@example.com>
Date:   Fri Jun 14 17:09:10 2013 -0400

    Added hickory-dickory-dock.txt.

commit 4ada88186d892571940b8735a0052df258a91b30
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

commit 10e0e68f1f22b0726f6b6e0a3e5080970a044151
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

commit 83d3b90e847f7bf7f787da9d499fb8b05b640548 (HEAD -> master)
Author: Syofia <syofia1700016062@webmail.uad.ac.id>
Date:   Fri Feb 21 14:36:43 2020 +0700

    Added project overview to README.txt

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

commit 4b153702f71a789d019f6b5734fc29a10021d898
Author: Bob <bob@example.com>
Date:   Fri Jun 14 17:09:10 2013 -0400

    Added hickory-dickory-dock.txt.

commit 4ada88186d892571940b8735a0052df258a91b30
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

bash: it: command not found

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git log --oneline
83d3b90 (HEAD -> master) Added project overview to README.txt
ba50852 (origin/master, origin/HEAD) Added government version of roses are red.
4b15370 Added hickory-dickory-dock.txt.
4ada881 Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt
10e0e68 Added jack-and-jill.txt.
6a69e0f Added all-around-the-mulberry-bush.txt.
d30493a Added project overview to README.txt
710f4bd First commit.

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git log -p
commit 83d3b90e847f7bf7f787da9d499fb8b05b640548 (HEAD -> master)
Author: Syofia <syofia1700016062@webmail.uad.ac.id>
Date:   Fri Feb 21 14:36:43 2020 +0700

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index c83e022..9ef4a73 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1,2 @@
 This repo is a collection of my favorite nursery rhymes.
+This repo is a collection of my favorite nursery rhymes.

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

diff --git a/roses-are-red.txt b/roses-are-red.txt
new file mode 100644
index 0000000..efba165
--- /dev/null
+++ b/roses-are-red.txt
@@ -0,0 +1,8 @@
+Roses are red
+-------------
+
+Roses are red
+Violets are blue
+Nobody loves GitHub
+More than government agencies do!
+

commit 4b153702f71a789d019f6b5734fc29a10021d898
Author: Bob <bob@example.com>
Date:   Fri Jun 14 17:09:10 2013 -0400

    Added hickory-dickory-dock.txt.

diff --git a/hickory-dickory-dock.txt b/hickory-dickory-dock.txt
new file mode 100644
index 0000000..a337f4c
--- /dev/null
+++ b/hickory-dickory-dock.txt
@@ -0,0 +1,5 @@
+Hickory, dickory, dock,
+The mouse ran up the clock.
+The clock struck one,
+The mouse ran down!
+Hickory, dickory, dock.

commit 4ada88186d892571940b8735a0052df258a91b30
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt

diff --git a/hokey-pokey.txt b/hokey-pokey.txt
new file mode 100644
index 0000000..97f425b
--- /dev/null
+++ b/hokey-pokey.txt
@@ -0,0 +1,16 @@
+You put your right foot in,
+You put your right foot out;
+You put your right foot in,
+And you shake it all about.
+You do the Hokey-Pokey,
+And you turn yourself around.
+That's what it's all about!
+
+You put your left foot in...
+You put your right hand in...
+You put your right side in...
+You put your nose in...
+You put your tail in...
+You put your head in...
+You put your whole self in...
+
diff --git a/old-mother-hubbard.txt b/old-mother-hubbard.txt
new file mode 100644
index 0000000..c91ff71
--- /dev/null
+++ b/old-mother-hubbard.txt
@@ -0,0 +1,34 @@
+Old Mother Hubbard
+Went to the cupboard
+To fetch her poor dog a bone;
+But when she came there
+The cupboard was bare,
+And so the poor dog had none.
+She took a clean dish
+To get him some tripe;
+But when she came back
+He was smoking a pipe.
+She went to the grocer's
+To buy him some fruit;
+But when she came back
+He was playing the flute.
+
+She went to the baker's
+To buy him some bread;
+But when she came back
+The poor dog was dead.
+
+She went to the undertaker's
+To buy him a coffin;
+But when she came back
+The poor dog was laughing.
+
+She went to the hatter's
+To buy him a hat;
+But when she came back
+He was feeding the cat.
+
+The dame made a curtsey,
+The dog made a bow;
+The dame said, "Your servant."
+The dog said, "Bow wow!"
diff --git a/twinkle-twinkle.txt b/twinkle-twinkle.txt
new file mode 100644
index 0000000..5585462
--- /dev/null
+++ b/twinkle-twinkle.txt
@@ -0,0 +1,6 @@
+Twinkle, twinkle, little star,
+How I wonder what you are.
+Up above the world so high,
+Like a diamond in the sky.
+Twinkle, twinkle, little star,
+How I wonder what you are.

commit 10e0e68f1f22b0726f6b6e0a3e5080970a044151
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added jack-and-jill.txt.

diff --git a/jack-and-jill.txt b/jack-and-jill.txt
new file mode 100644
index 0000000..1596bce
--- /dev/null
+++ b/jack-and-jill.txt
@@ -0,0 +1,12 @@
+Jack and Jill
+Went up the hill
+To fetch a pail of water.
+Jack fell down
+And broke his crown
+And Jill came tumbling after.
+Up Jack got
+And home did trot
+As fast as he could caper
+Went to bed
+And plastered his head
+With vinegar and brown paper.

commit 6a69e0fc35d884d8bd005191b2ac21f3a90538a1
Author: Alice <alice@example.com>
Date:   Fri Jun 14 17:01:41 2013 -0400

    Added all-around-the-mulberry-bush.txt.

diff --git a/all-around-the-mulberry-bush.txt b/all-around-the-mulberry-bush.txt
new file mode 100644
index 0000000..b77d989
commit 83d3b90e847f7bf7f787da9d499fb8b05b640548 (HEAD -> master)
Author: Syofia <syofia1700016062@webmail.uad.ac.id>
Date:   Fri Feb 21 14:36:43 2020 +0700

    Added project overview to README.txt

diff --git a/README.txt b/README.txt
index c83e022..9ef4a73 100644
--- a/README.txt
+++ b/README.txt
@@ -1 +1,2 @@
 This repo is a collection of my favorite nursery rhymes.
+This repo is a collection of my favorite nursery rhymes.

commit ba50852e6f8d094ab6d93908a5fda11a911e6e93 (origin/master, origin/HEAD)
Author: Bryan Hirsch <bryan@bryanhirsch.com>
Date:   Mon Jun 8 13:09:27 2015 -0400

    Added government version of roses are red.

            new file:   roses-are-red.txt

diff --git a/roses-are-red.txt b/roses-are-red.txt
bash: it: command not found


ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git remote add origin https://github.com/Lutfiah16/kemampuandasar-2.git
fatal: remote origin already exists.

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git remote rm origin

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git remote add origin https://github.com/Lutfiah16/kemampuandasar-2.git

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git push -u origin master
To https://github.com/Lutfiah16/kemampuandasar-2.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/Lutfiah16/kemampuandasar-2.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

ASUS@DESKTOP-IVJ6LH1 MINGW64 ~/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/rhymes (master)
$ git push --force origin master
Enumerating objects: 26, done.
Counting objects: 100% (26/26), done.
Delta compression using up to 4 threads
Compressing objects: 100% (23/23), done.
Writing objects: 100% (26/26), 3.08 KiB | 242.00 KiB/s, done.
Total 26 (delta 6), reused 0 (delta 0)
remote: Resolving deltas: 100% (6/6), done.
To https://github.com/Lutfiah16/kemampuandasar-2.git
 + d409e67...83d3b90 master -> master (forced update)















