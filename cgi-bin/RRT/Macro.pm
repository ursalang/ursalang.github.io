# RRT::Macro (c) 2002-2021 Reuben Thomas (rrt@sc3d.org; http://rrt.sc3d.org)
# Distributed under the GNU General Public License

# A simple macro expander.

# Macros are supplied as a hash of names to subroutines.
# A macro is invoked as $macro or $macro{arg1, arg2, ...}
# Macros may be escaped by putting a backslash before the dollar.
# Commas in arguments may be escaped with a backslash.
# Unknown macros are ignored.
# Arguments are expanded before the macro is called.
# A macro returns its expansion.

require 5.10.0;
package RRT::Macro;

use strict;
use warnings;

BEGIN {
  use Exporter ();
  our ($VERSION, @ISA, @EXPORT, @EXPORT_OK);
  $VERSION = 3.19;
  @ISA = qw(Exporter);
  @EXPORT = qw(&expand);
}
our @EXPORT_OK;

sub doMacro {
  my ($macro, $arg, $macros) = @_;
  my @arg = split /(?<!\\),/, ($arg || "");
  for (my $i = 0; $i <= $#arg; $i++) {
    $arg[$i] =~ s/\\,/,/g; # Remove escaping backslashes
    $arg[$i] = expand($arg[$i], $macros);
  }
  return $macros->{$macro}(@arg) if defined($macros->{$macro});
  my $ret = "\$$macro";
  $ret .= "{$arg}" if defined($arg);
  return $ret;
}

# FIXME: Allow syntax to be redefined; e.g. use XML syntax: <[namespace:]include file="" />
# Use this in Nancy
sub expand {
  my ($text, $macros) = @_;
  # FIXME: Allow other (all printable non-{?) characters in macro names
  # Note: Writing the next line as "return $text =~ s/.../.../ger" causes
  # Perl (up to at least 5.30) to panic with some inputs.
  $text =~ s/(\\?)\$([[:lower:]]+)(\{((?:[^{}]++|(?3))*)})?/$1 ? "\$$2" . ($3 ? $3 : "") : doMacro($2, $4, $macros)/ge;
  return $text;
}


1;                              # return a true value
